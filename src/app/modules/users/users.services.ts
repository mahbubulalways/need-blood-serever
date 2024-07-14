import httpStatus from 'http-status';
import config from '../../../config';
import DBConnect from '../../../server';
import { AppError } from '../../errors/AppError';
import { IUsers } from './users.interface';
import bcrypt from 'bcrypt';

// create  user into DB
export const createUserIntoDB = async (body: IUsers) => {
  const { email, name, password, image } = body;
  const isDeleted = false;
  const hashPassword = await bcrypt.hash(
    password as string,
    Number(config.BCRYPT_SALT),
  );
  const isExistUser = await DBConnect('SELECT * FROM  users  WHERE email=?', [
    email,
  ]);
  if (isExistUser.length) {
    throw new AppError(
      httpStatus.CONFLICT,
      'User with this email already exist.',
    );
  } else {
    const results = await DBConnect(
      'INSERT INTO users SET name=?, email=?, password=?, role=?,image=?,isDeleted=?',
      [name, email, hashPassword, 'user', image, isDeleted],
    );
    return results;
  }
};

// get all users from DB
export const getAllUserFromDB = async () => {
  const result = await DBConnect('SELECT * FROM  users Where isDeleted=?', [
    false,
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  result.map((user: IUsers) => delete user.password);
  return result;
};

// get single user from DB
export const getSingleUserFromDB = async (id: number) => {
  const result = await DBConnect('SELECT * FROM  users WHERE id=?', [id]);
  delete result[0].password;
  return result[0];
};

// temporary delete user from db
export const temporaryDeleteFromDB = async (id: number) => {
  const result = await DBConnect('UPDATE users  SET isDeleted=? WHERE id=?', [
    true,
    id,
  ]);
  return result;
};

// permanent delete user from db
export const permanentDeleteFromDB = async (id: number) => {
  const result = await DBConnect('DELETE FROM  users  WHERE id= ?', [id]);
  return result;
};

///
///
///
///

//  update user
// const updateUserInDB = async (payload: Partial<IUsers>) => {
//   const { name, image } = payload;
//   const results = await query(
//     'UPDATE users SET name=?,mobile=?,address=? WHERE id = ? ',
//     [name, mobile, address, id],
//   );
// };
