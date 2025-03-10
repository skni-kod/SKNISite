from django.db import models

from skni_site_backend.backend.models import TimeStampedModel


class Sponsor(TimeStampedModel):
    name = models.CharField(max_length=255)
    link = models.URLField()
    logo = models.ImageField(upload_to="sponsors/")
