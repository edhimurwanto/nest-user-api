import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import hashUtil from 'src/shared/utils/hash.util';
import LoginPayload from './models/login.payload';
import LoginResponse from './models/login.response';
import Users from '../users/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(payload: LoginPayload): Promise<Users> {

        const user = await this.usersService.findByUsername(payload.username)

        if (!user || !await hashUtil.compare(payload.password, user.password)) {
            throw new UnauthorizedException()
        }

        return user
    }

    async login(payload: LoginPayload): Promise<LoginResponse> {

        const user = await this.validateUser(payload)

        return {
            access_token: this.jwtService.sign({
                userId: user.id
            })
        }
    }

    async profile(userId: string) {
        return this.usersService.findById(userId);
    }

}
