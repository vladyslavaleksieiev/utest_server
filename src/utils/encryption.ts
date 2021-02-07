import { config } from 'dotenv';
import { pbkdf2Sync } from 'pbkdf2';

export const encrypt = (str: string): Buffer => {
  config();

  return pbkdf2Sync(str, process.env.PASSWORD_SALT, 1, 32, 'sha512');
};
