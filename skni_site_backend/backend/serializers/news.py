from rest_framework import serializers
from backend.models.news import News
from .mixins import ImageValidationMixin


class NewsSerializer(ImageValidationMixin, serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ["id", "title", "text", "author", "image"]
