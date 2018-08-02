# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

from . models import *

from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'hmst/index.html')
