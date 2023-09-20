from rest_framework import viewsets

from trainers.models import Client
from trainers.serializers import ClientSerializer
from trainers.permissions import IsOwner


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [IsOwner]
