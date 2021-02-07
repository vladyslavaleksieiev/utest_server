import { Injectable } from '@nestjs/common';

import { AuthModel } from './auth.model';

import { AuthValidator } from './auth.utils';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

@Injectable()
export class AuthService extends AuthValidator {
  async signup(request: ISignupRequestBody): Promise<IError | undefined> {
    const validations = this.validateSignupRequest(request);
    if (validations) {
      return validations;
    }

    const error = await AuthModel.signup(request);
    if (error) {
      return error;
    }
  }

  async signin(request: IUserCredentials): Promise<IError | undefined> {
    const validations = this.validateUserCredentials(request);
    if (validations) {
      return validations;
    }

    const error = await AuthModel.signin(request);
    if (error) {
      return error;
    }
  }
}
