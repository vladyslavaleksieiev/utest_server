import { Injectable } from '@nestjs/common';

import { AuthValidator } from './auth.utils';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

@Injectable()
export class AuthService extends AuthValidator {
  signup(request: ISignupRequestBody): IError | undefined {
    const validations = this.validateSignupRequest(request);
    if (validations) {
      return validations;
    }
  }

  signin(request: IUserCredentials): IError | undefined {
    const validations = this.validateUserCredentials(request);
    if (validations) {
      return validations;
    }
  }
}
