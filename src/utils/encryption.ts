import { config } from 'dotenv';
import { sign } from 'jsonwebtoken';
import { pbkdf2Sync } from 'pbkdf2';

config();

export const encrypt = (str: string): Buffer =>
  pbkdf2Sync(str, process.env.PASSWORD_SALT, 1, 32, 'sha512');

export const createToken = (email: string): string =>
  sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, data: { email } },
    process.env.JWT_SALT,
  );
