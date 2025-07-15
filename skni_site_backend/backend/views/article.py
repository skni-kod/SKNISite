from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

from backend.models import Article
from backend.serializers.article import ArticleSerializer


class ArticleListCreateView(APIView):
    """
    API endpoint that allows articles to be viewed or created.
    """

    parser_classes = [MultiPartParser, FormParser]

    # def get_permissions(self):
    #     """
    #     Instantiates and returns the list of permissions that this view requires.
    #     """
    #     if self.request.method == 'GET':
    #         permission_classes = [AllowAny]
    #     else:  # POST
    #         permission_classes = [IsAdminUser]
    #     return [permission() for permission in permission_classes]

    def get(self, request, format=None):
        """
        List all articles.
        """
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Create a new article.
        """
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleDetailView(APIView):
    """
    API endpoint that allows a specific article to be retrieved, updated or deleted.
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
        return get_object_or_404(Article, pk=pk)

    def get(self, request, pk, format=None):
        """
        Retrieve an article.
        """
        article = self.get_object(pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Update an article.
        """
        article = self.get_object(pk)
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        """
        Partially update an article.
        """
        article = self.get_object(pk)
        serializer = ArticleSerializer(article, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Delete an article.
        """
        article = self.get_object(pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ArticleImageUploadView(APIView):
    """
    API endpoint that allows images to be uploaded for an article.
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
        return get_object_or_404(Article, pk=pk)

    def post(self, request, pk, format=None):
        """
        Upload an image for an article.
        """
        article = self.get_object(pk)
        field_name = request.query_params.get("field", "image")

        serializer = ArticleSerializer()
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
        setattr(article, field_name, file)
        article.save()

        # Return the serialized object
        serializer = ArticleSerializer(article)
        return Response(serializer.data)


class ArticleImageDeleteView(APIView):
    """
    API endpoint that allows images to be deleted from an article.
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
        return get_object_or_404(Article, pk=pk)

    def delete(self, request, pk, format=None):
        """
        Delete an image from an article.
        """
        article = self.get_object(pk)
        field_name = request.query_params.get("field", "image")

        serializer = ArticleSerializer()
        if field_name not in serializer.fields:
            return Response(
                {"error": f"Field '{field_name}' does not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Get the current image
        image = getattr(article, field_name)

        # If there's no image, return an error
        if not image:
            return Response(
                {"error": f"No image to delete for field '{field_name}'"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Delete the image
        image.delete(save=False)
        setattr(article, field_name, None)
        article.save()

        # Return the serialized object
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
