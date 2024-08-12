import { Controller, Get, Post, Body, Res } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignInUserDto } from './dto/user-sign-in.dto';
import { SignUpUserDto } from './dto/user-sign-up.dto';
import { Response } from 'express';
import { AuthResponse } from 'src/lib/appwrite';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async SignUp(@Res() res: Response, @Body() signUpUserDto: SignUpUserDto) {
    const response: AuthResponse =
      await this.usersService.signUp(signUpUserDto);

    if (response.success) {
      return res.status(200).json({ data: response.data });
    } else {
      return res.status(401).json({ data: response.data });
    }
  }

  @Post('signin')
  async signIn(@Res() res: Response, @Body() signInUserDto: SignInUserDto) {
    const response: AuthResponse =
      await this.usersService.signIn(signInUserDto);
    if (response.success) {
      return res.status(200).json({ data: response.data });
    } else {
      return res.status(401).json({ data: response.data });
    }
  }
}
