# Import all viewsets and views here for easy access
from .user import UserViewSet
from .article import (
    ArticleListCreateView,
    ArticleDetailView,
    ArticleImageUploadView,
    ArticleImageDeleteView,
)
from .news import (
    NewsListCreateView,
    NewsDetailView,
    NewsImageUploadView,
    NewsImageDeleteView,
)
from .project import ProjectViewSet
from .section import SectionViewSet
from .sponsor import SponsorViewSet
from .history_entry import HistoryEntryListCreateView, HistoryEntryDetailView

__all__ = [
    "UserViewSet",
    "ArticleListCreateView",
    "ArticleDetailView",
    "ArticleImageUploadView",
    "ArticleImageDeleteView",
    "NewsListCreateView",
    "NewsDetailView",
    "NewsImageUploadView",
    "NewsImageDeleteView",
    "ProjectViewSet",
    "SectionViewSet",
    "SponsorViewSet",
    "HistoryEntryListCreateView",
    "HistoryEntryDetailView",
]
