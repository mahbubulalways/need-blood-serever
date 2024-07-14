import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AppError } from '../../errors/AppError';
import {
  createDonorIntoDB,
  getAllDonorsFromDB,
  getPendingDonorsFromDB,
  getSingleDonorFromDB,
  updateStatusOfDonorsFromDB,
} from './donner.services';

//* create donor
const createDonorController = catchAsync(async (req, res) => {
  const body = req.body;
  const result = await createDonorIntoDB(body);
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Apply for donor successfully',
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Apply failed.');
  }
});

//* get all donner
const getAllDonorsController = catchAsync(async (req, res) => {
  const result = await getAllDonorsFromDB();
  if (result.length) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Donor get successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Donor not found');
  }
});

//* get single donor controller
const getSingleDonorController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleDonorFromDB(Number(id));
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Donor get successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'Donor not found');
  }
});

//* get pending donner
const getPendingDonorController = catchAsync(async (req, res) => {
  const result = await getPendingDonorsFromDB();
  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'donors get successfully',
      data: result,
    });
  } else {
    throw new AppError(httpStatus.BAD_REQUEST, 'donors not found');
  }
});

//* update donar status
const updateDonorStatusController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await updateStatusOfDonorsFromDB(Number(id), status);
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

export const donorsController = {
  createDonorController,
  getAllDonorsController,
  getSingleDonorController,
  getPendingDonorController,
  updateDonorStatusController,
};
