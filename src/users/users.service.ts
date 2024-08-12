import { Injectable } from '@nestjs/common';
import { SignInUserDto } from './dto/user-sign-in.dto';

// need to move to a new ts file
// import { Client, Account, ID } from 'node-appwrite';

import { appWriteSignIn, appWriteSignUp } from 'src/lib/appwrite';

@Injectable()
export class UsersService {
  async signUp(): Promise<any> {
    return 'This action adds a new user';
  }
  async signIn(signInUserDto: SignInUserDto): Promise<{ success: boolean; data: any; }> {
    const { email, password } = signInUserDto;

    console.log('This action sign in a new user: ' + email + ' ' + password);

    const response = await appWriteSignIn(email, password);

    return response;
  }
}

