import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  permanentDeleteFromDB,
  temporaryDeleteFromDB,
} from './users.services';
import { AppError } from '../../errors/AppError';

const createUserController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await createUserIntoDB(body);
  if (result.affectedRows) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Registration successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Registration failed.');
  }
});

// get all users controller
const getAllUsersController = catchAsync(async (req, res) => {
  const result = await getAllUserFromDB();
  if (result.length) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users get successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Users not found');
  }
});

// get single user controller
const getSingleUsersController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleUserFromDB(Number(id));
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User get successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not found');
  }
});

// temporary delete user  user controller
const temporaryDeleteUsersController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await temporaryDeleteFromDB(Number(id));
  if (result.affectedRows) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not deleted');
  }
});

// temporary delete user  user controller
const permanentDeleteUsersController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await permanentDeleteFromDB(Number(id));
  if (result.affectedRows) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'User not deleted');
  }
});

export const userController = {
  createUserController,
  getAllUsersController,
  getSingleUsersController,
  temporaryDeleteUsersController,
  permanentDeleteUsersController,
};
