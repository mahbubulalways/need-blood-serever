import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import applicationRoutes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();
app.use(express.json());
app.use(cors());

// basic testing route
app.get('/need-blood/api/v1', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Need Blood Server Is Now Under Construction',
  });
});

// all application route is added here
app.use('/need-blood/api/v1', applicationRoutes);

// global error handler
app.use(globalErrorHandler);

export default app;
