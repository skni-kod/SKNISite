from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

from backend.models import Sponsor
from backend.serializers.sponsor import SponsorSerializer
from .mixins import ImageUploadMixin


class SponsorViewSet(ImageUploadMixin, viewsets.ModelViewSet):
    """
    API endpoint that allows sponsors to be viewed or edited.
    """

    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action in ["list", "retrieve"]:
            permission_classes = [AllowAny]
        elif self.action in ["upload_image", "delete_image"]:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
