from django.contrib import admin
from .models import (
    User,
    Section,
    Sponsor,
    Article,
    ArticleImage,
    HistoryEntry,
    Project,
    News,
    NewsImage,
)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "first_name", "last_name", "is_staff")
    search_fields = ("username", "email", "first_name", "last_name")
    list_filter = ("is_staff", "is_active", "date_joined")


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ("name", "isVisible", "created_at", "updated_at")
    search_fields = ("name", "description")
    list_filter = ("isVisible", "created_at", "updated_at")


@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ("name", "created_at", "updated_at")
    search_fields = ("name",)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "created_at", "updated_at")
    search_fields = ("title", "text")
    list_filter = ("created_at", "updated_at")


@admin.register(ArticleImage)
class ArticleImageAdmin(admin.ModelAdmin):
    list_display = ("article", "created_at")
    list_filter = ("created_at",)


@admin.register(HistoryEntry)
class HistoryEntryAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "created_at", "updated_at")
    search_fields = ("title", "text")
    list_filter = ("date", "created_at", "updated_at")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "creation_date",
        "publication_date",
        "created_at",
        "updated_at",
    )
    search_fields = ("title", "text")
    list_filter = ("creation_date", "publication_date", "created_at", "updated_at")


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "created_at", "updated_at")
    search_fields = ("title", "text")
    list_filter = ("created_at", "updated_at")


@admin.register(NewsImage)
class NewsImageAdmin(admin.ModelAdmin):
    list_display = ("news", "alt", "created_at")
    search_fields = ("alt",)
    list_filter = ("created_at",)
