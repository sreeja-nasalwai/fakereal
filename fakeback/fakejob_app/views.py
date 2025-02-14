from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer
import joblib
import os

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=400)
    user = User.objects.create_user(username=username, password=password, email=email)
    return Response({'message': 'User created successfully'})

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        return Response({'message': 'Login successful'})
    return Response({'error': 'Invalid credentials'}, status=400)

def detect_fake_job(description):
    model_path = os.path.join(os.path.dirname(__file__), 'fake_job_model.pkl')
    if os.path.exists(model_path):
        model = joblib.load(model_path)
        return bool(model.predict([description])[0])  # True if fake, False otherwise
    return False

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def post_job(request):
    data = request.data
    is_fake = detect_fake_job(data.get('description', ''))
    job = Job.objects.create(
        title=data['title'],
        description=data['description'],
        company=data['company'],
        location=data['location'],
        is_fake=is_fake,
        user=request.user
    )
    return Response(JobSerializer(job).data)

@api_view(['GET'])
def get_jobs(request):
    jobs = Job.objects.all()
    return Response(JobSerializer(jobs, many=True).data)

# Create your views here.
