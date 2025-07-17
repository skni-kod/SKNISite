from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from backend.models import User
from backend.serializers.user import UserSerializer
from .mixins import ImageUploadMixin


class UserViewSet(ImageUploadMixin, viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action in ["list", "retrieve", "me"]:
            permission_classes = [AllowAny]
        elif self.action in ["upload_image", "delete_image"]:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def me(self, request):
        """
        Returns the current user's information
        """
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

    @action(
        detail=False,
        methods=["post"],
        url_path="upload-avatar",
        parser_classes=[MultiPartParser, FormParser],
        permission_classes=[IsAuthenticated],
    )
    def upload_avatar(self, request):
        """
        Upload an avatar for the current user.
        """
        user = request.user

        if "avatar" not in request.FILES:
            return Response(
                {"error": "No file provided for field 'avatar'"}, status=400
            )

        # Get the file from the request
        file = request.FILES["avatar"]

        # Set the file on the user
        user.avatar = file
        user.save()

        # Return the serialized user
        serializer = self.get_serializer(user)
        return Response(serializer.data)
