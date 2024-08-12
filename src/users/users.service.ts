import { Injectable } from '@nestjs/common';
import { SignInUserDto } from './dto/user-sign-in.dto';
import { SignUpUserDto } from './dto/user-sign-up.dto';

import { appWriteSignIn, appWriteSignUp, AuthResponse } from 'src/lib/appwrite';

@Injectable()
export class UsersService {
  async signUp(signUpUserDto: SignUpUserDto): Promise<any> {
    const { name, email, password } = signUpUserDto;

    const response : AuthResponse = await appWriteSignUp(name, email, password);

    console.log('response from appWriteSignUp', response);
    return response;
  }
  async signIn(
    signInUserDto: SignInUserDto,
  ): Promise<{ success: boolean; data: any }> {
    const { email, password } = signInUserDto;

    console.log('This action sign in a new user: ' + email + ' ' + password);

    const response = await appWriteSignIn(email, password);

    return response;
  }
}
