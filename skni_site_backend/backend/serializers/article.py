from rest_framework import serializers
from backend.models.article import Article, ArticleImage
from .mixins import ImageValidationMixin
from .article_image import ArticleImageSerializer


class ArticleAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article.author.field.related_model
        fields = ["id", "email", "first_name", "last_name"]


class ArticleSerializer(ImageValidationMixin, serializers.ModelSerializer):
    author = ArticleAuthorSerializer(read_only=True)
    images = ArticleImageSerializer(many=True, read_only=True)
    image_ids = serializers.ListField(
        child=serializers.IntegerField(), write_only=True, required=False
    )

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "text",
            "author",
            "main_image",
            "created_at",
            "images",
            "image_ids",
        ]

    def create(self, validated_data):
        image_ids = validated_data.pop("image_ids", [])
        article = super().create(validated_data)

        # Assign the article to the images
        if image_ids:
            ArticleImage.objects.filter(id__in=image_ids, article__isnull=True).update(
                article=article
            )

        return article

    def update(self, instance, validated_data):
        image_ids = validated_data.pop("image_ids", [])
        article = super().update(instance, validated_data)

        # Assign the article to the images
        if image_ids:
            ArticleImage.objects.filter(id__in=image_ids, article__isnull=True).update(
                article=article
            )

        return article
