import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthorizedUser } from 'src/shared/utils/decorators/user.decorator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import Users from '../users/user.entity';
import LoginPayload from './models/login.payload';
import LoginResponse from './models/login.response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
  ) { }

  @Post('login')
  async login(@Body() payload: LoginPayload): Promise<LoginResponse> {
    return this.authService.login(payload)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@AuthorizedUser() userId: string): Promise<Users> {
    return this.authService.profile(userId)
  }
}
