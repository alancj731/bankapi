import { Controller, Get, Post, Body, Res } from '@nestjs/common';

import { UsersService } from './users.service';
import { SignInUserDto } from './dto/user-sign-in.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    async SignUp() {
      const result = await this.usersService.signUp();
    }

    @Post('signin')
    async signIn(@Res() res: Response, @Body() signInUserDto: SignInUserDto) {
      const result = await this.usersService.signIn(signInUserDto);
      if (result.success){
        return res.status(200).json({message: 'success'});
      }
      else{
        return res.status(401).json({message: 'failed'});
      }
    }
}
