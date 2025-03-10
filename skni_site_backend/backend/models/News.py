from django.db import models

from skni_site_backend.backend.models import TimeStampedModel, User


class NewsImage(TimeStampedModel):
    news = models.ForeignKey("Article", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="article_images/")
    alt = models.CharField(max_length=255)

    def __str__(self):
        return self.alt


class News(TimeStampedModel):
    title = models.CharField(max_length=255)
    text = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="articles/", null=True, blank=True)

    def __str__(self):
        return self.title
