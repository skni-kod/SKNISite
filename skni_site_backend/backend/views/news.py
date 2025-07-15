from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

from backend.models import News
from backend.serializers.news import NewsSerializer


class NewsListCreateView(APIView):
    """
    API endpoint that allows news to be viewed or created.
    """

    parser_classes = [MultiPartParser, FormParser]

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
        List all news items.
        """
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Create a new news item.
        """
        serializer = NewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NewsDetailView(APIView):
    """
    API endpoint that allows a specific news item to be retrieved, updated or deleted.
    """

    parser_classes = [MultiPartParser, FormParser]

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
        return get_object_or_404(News, pk=pk)

    def get(self, request, pk, format=None):
        """
        Retrieve a news item.
        """
        news = self.get_object(pk)
        serializer = NewsSerializer(news)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Update a news item.
        """
        news = self.get_object(pk)
        serializer = NewsSerializer(news, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        """
        Partially update a news item.
        """
        news = self.get_object(pk)
        serializer = NewsSerializer(news, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Delete a news item.
        """
        news = self.get_object(pk)
        news.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class NewsImageUploadView(APIView):
    """
    API endpoint that allows images to be uploaded for a news item.
    """

    parser_classes = [MultiPartParser, FormParser]

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        return [IsAuthenticated()]

    def get_object(self, pk):
        """
        Helper method to get the object with given pk
        """
        return get_object_or_404(News, pk=pk)

    def post(self, request, pk, format=None):
        """
        Upload an image for a news item.
        """
        news = self.get_object(pk)
        field_name = request.query_params.get("field", "image")

        serializer = NewsSerializer()
        if field_name not in serializer.fields:
            return Response(
                {"error": f"Field '{field_name}' does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if field_name not in request.FILES:
            return Response(
                {"error": f"No file provided for field '{field_name}'"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the file from the request
        file = request.FILES[field_name]

        # Set the file on the object
        setattr(news, field_name, file)
        news.save()

        # Return the serialized object
        serializer = NewsSerializer(news)
        return Response(serializer.data)


class NewsImageDeleteView(APIView):
    """
    API endpoint that allows images to be deleted from a news item.
    """

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        return [IsAuthenticated()]

    def get_object(self, pk):
        """
        Helper method to get the object with given pk
        """
        return get_object_or_404(News, pk=pk)

    def delete(self, request, pk, format=None):
        """
        Delete an image from a news item.
        """
        news = self.get_object(pk)
        field_name = request.query_params.get("field", "image")

        serializer = NewsSerializer()
        if field_name not in serializer.fields:
            return Response(
                {"error": f"Field '{field_name}' does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the current image
        image = getattr(news, field_name)

        # If there's no image, return an error
        if not image:
            return Response(
                {"error": f"No image to delete for field '{field_name}'"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Delete the image
        image.delete(save=False)
        setattr(news, field_name, None)
        news.save()

        # Return the serialized object
        serializer = NewsSerializer(news)
        return Response(serializer.data)
