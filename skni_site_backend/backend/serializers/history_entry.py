from rest_framework import serializers
from backend.models.history_entry import HistoryEntry


class HistoryEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoryEntry
        fields = ["id", "title", "text", "date", "icon"]
