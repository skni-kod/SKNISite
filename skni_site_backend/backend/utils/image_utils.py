from io import BytesIO
from PIL import Image
from django.core.files.base import ContentFile
import os


def optimize_image(image, max_width=1200, max_height=1200, quality=85, format="JPEG"):
    """
    Optimize an image by resizing it to fit within max dimensions and compressing it.

    Args:
        image: Django ImageField instance
        max_width: Maximum width in pixels
        max_height: Maximum height in pixels
        quality: JPEG compression quality (1-100)
        format: Output format ('JPEG', 'PNG', etc.)

    Returns:
        Optimized image as ContentFile
    """
    if not image:
        return None

    # Open the image using PIL
    img = Image.open(image)

    # Convert to RGB if the image is in RGBA mode (for PNG transparency)
    if img.mode == "RGBA" and format == "JPEG":
        img = img.convert("RGB")

    # Calculate new dimensions while maintaining aspect ratio
    width, height = img.size
    if width > max_width or height > max_height:
        # Calculate the ratio
        ratio = min(max_width / width, max_height / height)
        new_width = int(width * ratio)
        new_height = int(height * ratio)

        # Resize the image
        img = img.resize((new_width, new_height), Image.LANCZOS)

    # Save the optimized image to a BytesIO object
    output = BytesIO()
    img.save(output, format=format, quality=quality, optimize=True)
    output.seek(0)

    # Get the file extension
    file_extension = "jpg" if format == "JPEG" else format.lower()

    # Get the original filename without extension
    if hasattr(image, "name"):
        original_name = os.path.splitext(os.path.basename(image.name))[0]
        filename = f"{original_name}.{file_extension}"
    else:
        filename = f"optimized.{file_extension}"

    # Return as ContentFile
    return ContentFile(output.getvalue(), name=filename)


def validate_image(image, max_size_mb=5, allowed_formats=None):
    """
    Validate an image file based on size and format.

    Args:
        image: Django uploaded file
        max_size_mb: Maximum file size in MB
        allowed_formats: List of allowed formats (e.g., ['JPEG', 'PNG'])

    Returns:
        (bool, str): (is_valid, error_message)
    """
    if not image:
        return False, "No image provided"

    # Check file size
    max_size_bytes = max_size_mb * 1024 * 1024  # Convert MB to bytes
    if image.size > max_size_bytes:
        return False, f"Image size exceeds the maximum allowed size of {max_size_mb}MB"

    # Check file format
    if allowed_formats:
        try:
            img = Image.open(image)
            if img.format not in allowed_formats:
                return (
                    False,
                    f"Image format {img.format} is not supported. Allowed formats: {', '.join(allowed_formats)}",
                )
        except Exception as e:
            return False, f"Invalid image file: {str(e)}"

    return True, ""


class OptimizedImageField:
    """
    A utility class to handle image optimization for model fields.
    This is not a field itself, but a helper to use in model save methods.
    """

    @staticmethod
    def process_image(instance, field_name, **kwargs):
        """
        Process and optimize an image field on a model instance.

        Args:
            instance: Model instance
            field_name: Name of the ImageField to optimize
            **kwargs: Additional arguments for optimize_image

        Returns:
            bool: True if image was processed, False otherwise
        """
        field = getattr(instance, field_name)
        if not field:
            return False

        # Only process if the field has been changed
        if (
            hasattr(instance, "_original_" + field_name)
            and getattr(instance, "_original_" + field_name) == field
        ):
            return False

        # Optimize the image
        optimized_image = optimize_image(field, **kwargs)
        if optimized_image:
            setattr(instance, field_name, optimized_image)
            return True

        return False
