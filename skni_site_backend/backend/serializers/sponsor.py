from rest_framework import serializers
from backend.models.sponsor import Sponsor
from .mixins import ImageValidationMixin


class SponsorSerializer(ImageValidationMixin, serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ["id", "name", "link", "logo"]
