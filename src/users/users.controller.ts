import { Controller, Get, Post, Body, Headers, Res } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignInUserDto } from './dto/user-sign-in.dto';
import { SignUpUserDto } from './dto/user-sign-up.dto';
import { Response } from 'express';
import { AuthResponse } from 'src/lib/appwrite';
import { getSessionAccount } from 'src/lib/appwrite-client';
import { Account } from 'node-appwrite';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async SignUp(@Res() res: Response, @Body() signUpUserDto: SignUpUserDto) {
    const response: AuthResponse =
      await this.usersService.signUp(signUpUserDto);

    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(401).json(response.data);
    }
  }

  @Post('signin')
  async signIn(@Res() res: Response, @Body() signInUserDto: SignInUserDto) {
    const response: AuthResponse =
      await this.usersService.signIn(signInUserDto);
    if (response.success) {
      return res.status(200).json(response.data);
    } else {
      return res.status(401).json(response.data);
    }
  }

  @Get('verify')
  async verify(
    @Headers('Authorization') authHeader: string,
    @Res() res: Response,
  ) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ message: 'Authorization header was not found!' });
    }

    const token = authHeader.split(' ')[1];

    const account = getSessionAccount(token);
    try {
      const accountData = await account.get();
      console.log('User verified', accountData);
      return res.status(200).json(accountData);
    } catch (error) {
      console.log('Failed to verify the user', error);
      return res.status(401).json('Failed to verify the user');
    }
  }
}
