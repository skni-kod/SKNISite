from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, AllowAny

from backend.models import Section
from backend.serializers.section import SectionSerializer


class SectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sections to be viewed or edited.
    """

    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == "list" or self.action == "retrieve":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
