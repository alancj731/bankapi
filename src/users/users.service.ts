import { Injectable } from '@nestjs/common';
import { SignInUserDto } from './dto/user-sign-in.dto';


@Injectable()
export class UsersService {
    signUp(): string {
        return 'This action adds a new user';
    }
    signIn(signInUserDto: SignInUserDto): string {
        const { email, password } = signInUserDto;
        
        console.log('This action sign in a new user: ' + email + ' ' + password);

        return 'This action sign in a new user: ' + email + ' ' + password;
    }
}
