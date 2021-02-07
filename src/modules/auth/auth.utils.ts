import { validateString } from '@utils/validatation';

import {
  EMAIL_REGEXP, NAME_REGEXP, PASSWORD_REGEXP, ROLES
} from './auth.constants';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

export class AuthValidator {
  validateUserCredentials(
    userCredentials: IUserCredentials,
  ): IError | undefined {
    const email = validateString(userCredentials.email, EMAIL_REGEXP, 'email');
    if (email) {
      return email;
    }

    const password = validateString(
      userCredentials.password,
      PASSWORD_REGEXP,
      'password',
    );
    if (password) {
      return password;
    }
  }

  validateSignupRequest(signup: ISignupRequestBody): IError | undefined {
    const userError = this.validateUserCredentials(signup);
    if (userError) {
      return userError;
    }

    const firstName = validateString(
      signup.firstName,
      NAME_REGEXP,
      'firstName',
    );
    if (firstName) {
      return firstName;
    }

    const lastName = validateString(signup.lastName, NAME_REGEXP, 'lastName');
    if (lastName) {
      return lastName;
    }

    if (!ROLES.includes(signup.role)) {
      return { message: 'role should be chousen' };
    }
  }
}
