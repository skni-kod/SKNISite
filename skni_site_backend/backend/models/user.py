from django.contrib.auth.models import AbstractUser
from django.db import models

from skni_site_backend.backend.models import TimeStampedModel


class User(TimeStampedModel, AbstractUser):
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.email
