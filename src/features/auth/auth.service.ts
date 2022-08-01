import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import LoginPayload from './login.payload';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(payload: LoginPayload): Promise<any> {

        const user = await this.usersService.findByUsername(payload.username)

        if (user?.password !== payload.password) {
            throw new UnauthorizedException()
        }

        return user
    }

    async login(payload: LoginPayload) {

        const user = await this.validateUser(payload)

        return {
            access_token: this.jwtService.sign({
                userId: user.id
            })
        }
    }

    async profile() {
        return {
            message: 'Test Profile'
        }
    }

}
