from django.db import models

from .utils import TimeStampedModel


class Section(TimeStampedModel):
    name = models.TextField()
    description = models.TextField()
    isVisible = models.BooleanField()
    icon = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
