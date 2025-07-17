from rest_framework import serializers
from backend.models.section import Section


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ["id", "name", "description", "isVisible", "icon"]
