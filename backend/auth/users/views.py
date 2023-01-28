from rest_framework.views import APIView

from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST

from .models import User

from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save(
                phone_number=serializer.validated_data['phone_number'],
            )

            user.set_password(serializer.validated_data['password'])
            user.is_active = True
            user.save()

            return Response(serializer.data)

        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        phone_number = request.data['phone_number']
        password = request.data['password']

        user = User.objects.filter(phone_number=phone_number).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        encoded_token = jwt.encode(payload, 'secret',
                                   algorithm='HS256')

        response = Response({'jwt': encoded_token})

        response.set_cookie(key='jwt', value=encoded_token, httponly=True)

        return response


class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.get(id=payload['id'])
        serializer = UserSerializer(user)

        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
