import { encrypt } from '@utils/encryption';
import { Schema } from 'mongoose';

import { User } from './auth.schema';

import { ISignupRequestBody, IUserCredentials } from './auth.typings';

export class AuthModel {
  static async signin(request: IUserCredentials): Promise<IError | undefined> {
    const password = encrypt(request.password);

    const user = await User.findOne({ password, email: request.email }).exec();

    if (user === null) {
      return {
        message: 'No User found',
        status: 404,
      };
    }
  }

  static async signup(
    request: ISignupRequestBody,
  ): Promise<IError | undefined> {
    if (await this.findOne(request.email)) {
      return {
        status: 409,
        message: 'User with such email is allready exist',
      };
    }

    const password = encrypt(request.password);

    const user = new User({
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      password,
    });
    await user.save();
  }

  private static async findOne(email: string): Promise<boolean> {
    return (await User.findOne({ email })) !== null;
  }

  public static async findId(email: string): Promise<Schema.Types.ObjectId> {
    const user = await User.findOne({ email });

    if (user) {
      return user.id;
    }
  }
}
