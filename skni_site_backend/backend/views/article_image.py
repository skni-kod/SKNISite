from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

from backend.models.article import ArticleImage
from backend.serializers.article_image import ArticleImageSerializer


class ArticleImageListCreateView(APIView):
    """
    API endpoint that allows article images to be viewed or created.
    """

    parser_classes = [MultiPartParser, FormParser]

    #
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
        List all article images.
        """
        images = ArticleImage.objects.all()
        serializer = ArticleImageSerializer(
            images, many=True, context={"request": request}
        )
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Create a new article image without an article.
        Returns the image URL.
        """
        serializer = ArticleImageSerializer(
            data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save(article=None)  # Explicitly set article to None
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArticleImageDetailView(APIView):
    """
    API endpoint that allows a specific article image to be retrieved, updated or deleted.
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
        return get_object_or_404(ArticleImage, pk=pk)

    def get(self, request, pk, format=None):
        """
        Retrieve an article image.
        """
        image = self.get_object(pk)
        serializer = ArticleImageSerializer(image, context={"request": request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Update an article image.
        """
        image = self.get_object(pk)
        serializer = ArticleImageSerializer(
            image, data=request.data, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        """
        Partially update an article image.
        """
        image = self.get_object(pk)
        serializer = ArticleImageSerializer(
            image, data=request.data, partial=True, context={"request": request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Delete an article image.
        """
        image = self.get_object(pk)
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
