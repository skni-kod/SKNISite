from django.db import models

from .utils import TimeStampedModel


class HistoryEntry(TimeStampedModel):
    title = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateField()
    icon = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
