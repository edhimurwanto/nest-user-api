import { Injectable } from '@nestjs/common';
import User from './user.entity';

@Injectable()
export class UserService {
    get(): User {

        const user = new User()
        user.name = 'Edi M'
        user.age = 25
        user.gender = 'MALE'
        return user;
    }
}