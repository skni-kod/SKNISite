from django.db import models

from .utils import TimeStampedModel
from backend.utils.storage import default_storage


class NewsImage(TimeStampedModel):
    news = models.ForeignKey("News", on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="article_images/", storage=default_storage)
    alt = models.CharField(max_length=255)

    def __str__(self):
        return self.alt


class News(TimeStampedModel):
    title = models.CharField(max_length=255)
    text = models.TextField()
    author = models.ForeignKey("User", on_delete=models.CASCADE, related_name="news")
    image = models.ImageField(
        upload_to="news/", null=True, blank=True, storage=default_storage
    )

    def __str__(self):
        return self.title
