from django.db import models

from skni_site_backend.backend.models import TimeStampedModel


class Section(TimeStampedModel):
    name = models.TextField()
    description = models.TextField()
    isVisible = models.BooleanField()
    icon = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
