from django.db import models

from skni_site_backend.backend.models import TimeStampedModel, User


class Project(TimeStampedModel):
    title = models.CharField(max_length=100)
    text = models.TextField()
    creation_date = models.DateTimeField()
    publication_date = models.DateTimeField(null=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="projects")
    section = models.ForeignKey(
        "Section", on_delete=models.CASCADE, related_name="projects", null=True
    )
    authors = models.ManyToManyField(User, blank=True)

    gallery = models.ManyToManyField("Gallery", blank=True)

    def __str__(self):
        return self.title
