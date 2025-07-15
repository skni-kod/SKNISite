from django.contrib.auth.models import AbstractUser
from django.db import models

from .utils import TimeStampedModel
from backend.utils.storage import avatar_storage


class User(TimeStampedModel, AbstractUser):
    avatar = models.ImageField(
        upload_to="avatars/", null=True, blank=True, storage=avatar_storage
    )
    description = models.TextField(blank=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.email
