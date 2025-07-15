from rest_framework import serializers
from backend.models.project import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "text",
            "creation_date",
            "publication_date",
            "section",
            "authors",
        ]
