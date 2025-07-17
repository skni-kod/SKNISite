from rest_framework import serializers
from backend.models.user import User
from .mixins import ImageValidationMixin


class UserSerializer(ImageValidationMixin, serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "avatar", "description"]
