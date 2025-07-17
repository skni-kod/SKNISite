from rest_framework import serializers
from backend.utils.image_utils import validate_image


class ImageValidationMixin:
    """
    A mixin for serializers that handle image uploads.
    Provides validation for image fields.
    """

    def validate_image(self, image):
        """
        Validate an image field.
        """
        if not image:
            return image

        # Validate image size and format
        is_valid, error_message = validate_image(
            image,
            max_size_mb=5,  # 5MB max size
            allowed_formats=["JPEG", "PNG", "GIF"],
        )

        if not is_valid:
            raise serializers.ValidationError(error_message)

        return image

    def validate_avatar(self, avatar):
        """
        Validate an avatar field.
        """
        if not avatar:
            return avatar

        # Validate image size and format
        is_valid, error_message = validate_image(
            avatar,
            max_size_mb=2,  # 2MB max size
            allowed_formats=["JPEG", "PNG"],
        )

        if not is_valid:
            raise serializers.ValidationError(error_message)

        return avatar

    def validate_logo(self, logo):
        """
        Validate a logo field.
        """
        if not logo:
            return logo

        # Validate image size and format
        is_valid, error_message = validate_image(
            logo,
            max_size_mb=3,  # 3MB max size
            allowed_formats=["JPEG", "PNG", "SVG"],
        )

        if not is_valid:
            raise serializers.ValidationError(error_message)

        return logo
