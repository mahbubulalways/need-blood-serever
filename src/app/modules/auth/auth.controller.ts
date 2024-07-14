import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { catchAsync } from '../../utils/catchAsync';
import { loginUserIntoDB } from './auth.services';
import sendResponse from '../../utils/sendResponse';

const loginUserController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await loginUserIntoDB(body);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Login successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Login failed.');
  }
});

export const authController = {
  loginUserController,
};
