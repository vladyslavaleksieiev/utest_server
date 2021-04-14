import { config } from 'dotenv';
import { sign, verify } from 'jsonwebtoken';
import { pbkdf2Sync } from 'pbkdf2';

config();

export const encrypt = (str: string): Buffer =>
  pbkdf2Sync(str, process.env.PASSWORD_SALT, 1, 32, 'sha512');

export const createToken = (user: string): string =>
  sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, data: { user } },
    process.env.JWT_SALT,
  );

export const validateToken = (
  token: string,
): { ok: boolean; user?: string } => {
  try {
    const decoded = verify(token, process.env.JWT_SALT) as {
      data: { user: string };
    };

    return { ok: true, user: decoded.data.user };
  } catch {
    return { ok: false };
  }
};
