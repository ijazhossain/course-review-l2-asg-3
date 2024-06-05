/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/modules/course/course.route';
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
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
});
export default app;
