import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() request: ISignupRequestBody,
    @Res({ passthrough: true }) response: Response,
  ): Promise<IResponce> {
    const error = await this.authService.signup(request);

    if (error) {
      response.status(error.status || HttpStatus.BAD_REQUEST);
      return { ok: false, message: error.message };
    }

    return { ok: true };
  }

  @Post('signin')
  async signin(
    @Body() request: IUserCredentials,
    @Res({ passthrough: true }) response: Response,
  ): Promise<IResponce> {
    const error = await this.authService.signin(request);

    if (error) {
      response.status(error.status || HttpStatus.BAD_REQUEST);
      return { ok: false, message: error.message };
    }

    return { ok: true };
  }
}
