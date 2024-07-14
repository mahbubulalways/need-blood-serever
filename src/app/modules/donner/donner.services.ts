import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { IDonner } from './donner.interface';
import DBConnect, { pool } from '../../../server';

export const createDonorIntoDB = async (body: Partial<IDonner>) => {
  const {
    userId,
    email,
    name,
    address,
    age,
    bloodGroup,
    district,
    facebook,
    gender,
    instagram,
    phone,
    twitter,
    upazilla,
  } = body;

  const connection = await pool.getConnection(); // Get a connection from the pool
  try {
    await connection.beginTransaction(); // Start the transaction
    await connection.query(
      `INSERT INTO donors (userId, name, email, address, age, bloodGroup, district, facebook, gender, instagram, phone, twitter, upazilla,status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,"pending")`,
      [
        userId,
        name,
        email,
        address,
        age,
        bloodGroup,
        district,
        facebook,
        gender,
        instagram,
        phone,
        twitter,
        upazilla,
      ],
    );

    //* Update user role
    await connection.query('UPDATE users SET role=? WHERE id=?', [
      'donor',
      userId,
    ]);

    await connection.commit();
    return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await connection.rollback();
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  } finally {
    connection.release();
  }
};

//* get all donors from DB
export const getAllDonorsFromDB = async () => {
  const result = await DBConnect('SELECT * FROM  donors WHERE status=?', [
    'approved',
  ]);
  return result;
};

//* pending donner
export const getPendingDonorsFromDB = async () => {
  const result = await DBConnect('SELECT * FROM  donors WHERE status=?', [
    'pending',
  ]);
  return result;
};

//* get single donor from DB
export const getSingleDonorFromDB = async (id: number) => {
  const result = await DBConnect(
    'SELECT * FROM  donors WHERE id = ? AND status = ?',
    [id, 'approved'],
  );
  return result[0];
};

//* update donar status
export const updateStatusOfDonorsFromDB = async (
  id: number,
  status: string,
) => {
  const result = await DBConnect('UPDATE donors  SET status=? WHERE id=?', [
    status,
    id,
  ]);
  return result;
};

// ! work here later

// temporary delete user from db
// export const temporaryDeleteFromDB = async (id: number) => {
//   const result = await DBConnect('UPDATE users  SET isDeleted=? WHERE id=?', [
//     true,
//     id,
//   ]);
//   return result;
// };

// // permanent delete user from db
// export const permanentDeleteFromDB = async (id: number) => {
//   const result = await DBConnect('DELETE FROM  users  WHERE id= ?', [id]);
//   return result;
// };
