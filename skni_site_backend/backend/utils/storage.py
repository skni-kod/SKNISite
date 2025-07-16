from django.core.files.storage import FileSystemStorage
from django.conf import settings
import os

from .image_utils import optimize_image


class OptimizedImageStorage(FileSystemStorage):
    """
    Custom storage for images that automatically optimizes them on save.
    """

    def __init__(self, *args, **kwargs):
        # Extract optimization parameters from kwargs
        self.max_width = kwargs.pop("max_width", 1200)
        self.max_height = kwargs.pop("max_height", 1200)
        self.quality = kwargs.pop("quality", 85)
        self.format = kwargs.pop("format", "JPEG")

        # Initialize the parent class
        super().__init__(*args, **kwargs)

    def _save(self, name, content):
        """
        Override the _save method to optimize images before saving.
        """
        # Check if the file is an image
        if self._is_image_file(name):
            # Optimize the image
            optimized_content = optimize_image(
                content,
                max_width=self.max_width,
                max_height=self.max_height,
                quality=self.quality,
                format=self.format,
            )

            # If optimization was successful, use the optimized content
            if optimized_content:
                content = optimized_content

        # Call the parent _save method to save the file
        return super()._save(name, content)

    def _is_image_file(self, filename):
        """
        Check if a file is an image based on its extension.
        """
        image_extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"]
        ext = os.path.splitext(filename)[1].lower()
        return ext in image_extensions


# Create default instances with different optimization settings
default_storage = OptimizedImageStorage(
    location=settings.MEDIA_ROOT,
    base_url=settings.MEDIA_URL,
    max_width=1200,
    max_height=1200,
    quality=85,
    format="JPEG",
)

thumbnail_storage = OptimizedImageStorage(
    location=settings.MEDIA_ROOT,
    base_url=settings.MEDIA_URL,
    max_width=400,
    max_height=400,
    quality=80,
    format="JPEG",
)

avatar_storage = OptimizedImageStorage(
    location=settings.MEDIA_ROOT,
    base_url=settings.MEDIA_URL,
    max_width=300,
    max_height=300,
    quality=85,
    format="JPEG",
)

logo_storage = OptimizedImageStorage(
    location=settings.MEDIA_ROOT,
    base_url=settings.MEDIA_URL,
    max_width=600,
    max_height=600,
    quality=90,
    format="PNG",
)
