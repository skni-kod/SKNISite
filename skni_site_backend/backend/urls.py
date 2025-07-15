from django.urls import path, include
from rest_framework.routers import DefaultRouter

from backend.views.user import UserViewSet
from backend.views.article import (
    ArticleListCreateView,
    ArticleDetailView,
    ArticleImageUploadView,
    ArticleImageDeleteView,
)
from backend.views.news import (
    NewsListCreateView,
    NewsDetailView,
    NewsImageUploadView,
    NewsImageDeleteView,
)
from backend.views.project import ProjectViewSet
from backend.views.section import SectionViewSet
from backend.views.sponsor import SponsorViewSet
from backend.views.history_entry import (
    HistoryEntryListCreateView,
    HistoryEntryDetailView,
)
from backend.views.article_image import (
    ArticleImageListCreateView,
    ArticleImageDetailView,
)

app_name = "backend"

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"projects", ProjectViewSet)
router.register(r"sections", SectionViewSet)
router.register(r"sponsors", SponsorViewSet)

urlpatterns = [
    # Include the router URLs
    path("", include(router.urls)),
    # Article URLs
    path("articles/", ArticleListCreateView.as_view(), name="article-list"),
    path("articles/<int:pk>/", ArticleDetailView.as_view(), name="article-detail"),
    path(
        "articles/<int:pk>/upload-image/",
        ArticleImageUploadView.as_view(),
        name="article-upload-image",
    ),
    path(
        "articles/<int:pk>/delete-image/",
        ArticleImageDeleteView.as_view(),
        name="article-delete-image",
    ),
    # Article Image URLs
    path(
        "article-images/",
        ArticleImageListCreateView.as_view(),
        name="article-image-list",
    ),
    path(
        "article-images/<int:pk>/",
        ArticleImageDetailView.as_view(),
        name="article-image-detail",
    ),
    # News URLs
    path("news/", NewsListCreateView.as_view(), name="news-list"),
    path("news/<int:pk>/", NewsDetailView.as_view(), name="news-detail"),
    path(
        "news/<int:pk>/upload-image/",
        NewsImageUploadView.as_view(),
        name="news-upload-image",
    ),
    path(
        "news/<int:pk>/delete-image/",
        NewsImageDeleteView.as_view(),
        name="news-delete-image",
    ),
    # History URLs
    path("history/", HistoryEntryListCreateView.as_view(), name="history-list"),
    path("history/<int:pk>/", HistoryEntryDetailView.as_view(), name="history-detail"),
]
