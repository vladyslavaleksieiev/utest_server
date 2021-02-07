import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body() request: ISignupRequestBody,
    @Res({ passthrough: true }) response: Response,
  ): IResponce {
    const error = this.authService.signup(request);

    if (error) {
      response.status(HttpStatus.BAD_REQUEST);
      return { ok: false, ...error };
    }

    return { ok: true };
  }

  @Post('signin')
  signin(
    @Body() request: IUserCredentials,
    @Res({ passthrough: true }) response: Response,
  ): IResponce {
    const error = this.authService.signin(request);

    if (error) {
      response.status(HttpStatus.BAD_REQUEST);
      return { ok: false, ...error };
    }

    return { ok: true };
  }
}
