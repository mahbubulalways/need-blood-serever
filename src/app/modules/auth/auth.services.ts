import httpStatus from 'http-status';
import DBConnect from '../../../server';
import { AppError } from '../../errors/AppError';
import { IAuth } from './auth.interface';
import bcrypt from 'bcrypt';
import { jwtHelpers } from './auth.utils';
import config from '../../../config';
export const loginUserIntoDB = async (payload: IAuth) => {
  const { email, password } = payload;
  const result = await DBConnect('SELECT * FROM users WHERE email = ?', [
    email,
  ]);
  const hashedPassword = result[0].password;
  // match password
  const comparePassword = await bcrypt.compare(password, hashedPassword);

  if (comparePassword) {
    const tokenPayload = {
      email: result.email,
      role: result.role,
    };

    // create token
    const createToken = jwtHelpers.createToken(
      tokenPayload,
      config.JWT_SECRET as string,
      config.JWT_ACCESS_EXPIRES_IN as string,
    );

    // remove password and configure data and token
    delete result[0].password;
    const data = {
      accessToken: createToken,
      data: result[0],
    };
    return data;
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'Email or password is incorrect');
  }
};
