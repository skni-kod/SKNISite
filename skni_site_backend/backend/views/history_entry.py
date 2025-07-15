from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser, AllowAny

from backend.models import HistoryEntry
from backend.serializers.history_entry import HistoryEntrySerializer


class HistoryEntryListCreateView(APIView):
    """
    API endpoint that allows history entries to be viewed or created.
    """

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.request.method == "GET":
            permission_classes = [AllowAny]
        else:  # POST
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

    def get(self, request, format=None):
        """
        List all history entries.
        """
        history_entries = HistoryEntry.objects.all()
        serializer = HistoryEntrySerializer(history_entries, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Create a new history entry.
        """
        serializer = HistoryEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HistoryEntryDetailView(APIView):
    """
    API endpoint that allows a specific history entry to be retrieved, updated or deleted.
    """

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.request.method == "GET":
            permission_classes = [AllowAny]
        else:  # PUT, PATCH, DELETE
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

    def get_object(self, pk):
        """
        Helper method to get the object with given pk
        """
        return get_object_or_404(HistoryEntry, pk=pk)

    def get(self, request, pk, format=None):
        """
        Retrieve a history entry.
        """
        history_entry = self.get_object(pk)
        serializer = HistoryEntrySerializer(history_entry)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Update a history entry.
        """
        history_entry = self.get_object(pk)
        serializer = HistoryEntrySerializer(history_entry, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        """
        Partially update a history entry.
        """
        history_entry = self.get_object(pk)
        serializer = HistoryEntrySerializer(
            history_entry, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Delete a history entry.
        """
        history_entry = self.get_object(pk)
        history_entry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
