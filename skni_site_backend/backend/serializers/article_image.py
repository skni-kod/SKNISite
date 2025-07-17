from rest_framework import serializers
from backend.models.article import ArticleImage
from .mixins import ImageValidationMixin


class ArticleImageSerializer(ImageValidationMixin, serializers.ModelSerializer):
    class Meta:
        model = ArticleImage
        fields = ["id", "image"]
