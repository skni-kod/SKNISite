from django.db import models

from .utils import TimeStampedModel
from backend.utils.storage import logo_storage


class Sponsor(TimeStampedModel):
    name = models.CharField(max_length=255)
    link = models.URLField()
    logo = models.ImageField(upload_to="sponsors/", storage=logo_storage)
