from django.db import models

from .utils import TimeStampedModel


class Project(TimeStampedModel):
    title = models.CharField(max_length=100)
    text = models.TextField()
    creation_date = models.DateTimeField()
    publication_date = models.DateTimeField(null=True)
    section = models.ForeignKey(
        "Section", on_delete=models.CASCADE, related_name="projects", null=True
    )
    authors = models.ManyToManyField("User", blank=True, related_name="projects")

    def __str__(self):
        return self.title
