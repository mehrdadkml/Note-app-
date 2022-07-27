from rest_framework.serializers import ModelSerializer
from .models import NoteTable


class NoteSerializers(ModelSerializer):
    class Meta:
        model=NoteTable
        fields='__all__'
        
