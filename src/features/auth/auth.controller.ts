import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import LoginPayload from './login.payload';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
  ) { }

  @Post('login')
  async login(@Body() payload: LoginPayload) {
    return this.authService.login(payload)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return this.authService.profile()
  }

}
