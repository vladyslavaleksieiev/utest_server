export interface IUserCredentials {
  email: string;
  password: string;
}

export interface ISignupRequestBody extends IUserCredentials {
  firstName: string;
  lastName: string;
}

export interface ISigninResponse extends IResponse {
  jwt?: string;
}
