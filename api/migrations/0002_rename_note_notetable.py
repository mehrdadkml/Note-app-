# Generated by Django 4.0.6 on 2022-07-24 17:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Note',
            new_name='NoteTable',
        ),
    ]
