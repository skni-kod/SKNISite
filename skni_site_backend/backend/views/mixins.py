from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


class ImageUploadMixin:
    """
    A mixin for viewsets that handle image uploads.
    Provides actions for uploading, replacing, and deleting images.
    """

    @action(
        detail=True,
        methods=["post"],
        url_path="upload-image",
        parser_classes=[MultiPartParser, FormParser],
    )
    def upload_image(self, request, pk=None):
        """
        Upload an image for an object.
        """
        obj = self.get_object()
        field_name = request.query_params.get("field", "image")

        if field_name not in self.get_serializer().fields:
            return Response(
                {"error": f"Field '{field_name}' does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if field_name not in request.FILES:
            return Response(
                {"error": f"No file provided for field '{field_name}'"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the file from the request
        file = request.FILES[field_name]

        # Set the file on the object
        setattr(obj, field_name, file)
        obj.save()

        # Return the serialized object
        serializer = self.get_serializer(obj)
        return Response(serializer.data)

    @action(detail=True, methods=["delete"], url_path="delete-image")
    def delete_image(self, request, pk=None):
        """
        Delete an image from an object.
        """
        obj = self.get_object()
        field_name = request.query_params.get("field", "image")

        if field_name not in self.get_serializer().fields:
            return Response(
                {"error": f"Field '{field_name}' does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the current image
        image = getattr(obj, field_name)

        # If there's no image, return an error
        if not image:
            return Response(
                {"error": f"No image to delete for field '{field_name}'"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Delete the image
        image.delete(save=False)
        setattr(obj, field_name, None)
        obj.save()

        # Return the serialized object
        serializer = self.get_serializer(obj)
        return Response(serializer.data)
