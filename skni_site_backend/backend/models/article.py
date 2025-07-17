from django.db import models

from .utils import TimeStampedModel
from backend.utils.storage import default_storage


class ArticleImage(TimeStampedModel):
    article = models.ForeignKey(
        "Article", on_delete=models.CASCADE, null=True, related_name="images"
    )
    image = models.ImageField(upload_to="article_images/", storage=default_storage)

    def __str__(self):
        return f"Image of id {self.id} for {self.article.title if self.article else 'Unknown Article'}"


class Article(TimeStampedModel):
    title = models.CharField(max_length=255)
    text = models.TextField()
    author = models.ForeignKey(
        "User", on_delete=models.CASCADE, related_name="articles"
    )
    main_image = models.ImageField(
        upload_to="articles/", null=True, blank=True, storage=default_storage
    )

    def __str__(self):
        return self.title
