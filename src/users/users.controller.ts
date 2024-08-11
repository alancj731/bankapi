import { Controller, Get, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignInUserDto } from './dto/user-sign-in.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    SignUp(): string {
      return this.usersService.signUp();
    }

    @Post('signin')
    async signUp(@Body() signInUserDto: SignInUserDto): Promise<{ message: string }> {
      await this.usersService.signIn(signInUserDto);
      return { message: 'User signed in successfully' };
    }
}
