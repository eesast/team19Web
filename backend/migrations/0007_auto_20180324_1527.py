# Generated by Django 2.0.3 on 2018-03-24 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20180324_1148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teaminfo',
            name='score',
            field=models.CharField(default='[{"score":1000}]', max_length=8000),
        ),
    ]