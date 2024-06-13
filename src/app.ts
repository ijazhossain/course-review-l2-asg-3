/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/modules/course/course.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
app.use('/', CourseRoutes);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Express server is running!',
  });
});
// global error handler
app.use(globalErrorHandler);
export default app;
