# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-11-15 08:25


import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20180426_0710'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usernotification',
            name='timestamp',
            field=models.DateTimeField(db_index=True, default=datetime.datetime.now),
        ),
    ]
