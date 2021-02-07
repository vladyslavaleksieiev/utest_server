import { ROLES } from './auth.constants';

export interface IUserCredentials {
  email: string;
  password: string;
}

export type TRoles = typeof ROLES[number];

export interface ISignupRequestBody extends IUserCredentials {
  firstName: string;
  lastName: string;

  role: TRoles;
}

export interface ISigninResponse extends IResponse {
  jwt?: string;
}
