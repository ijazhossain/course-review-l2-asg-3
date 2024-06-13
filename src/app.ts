/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/modules/course/course.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import { CategoriesRoutes } from './app/modules/category/category.route';
import { ReviewsRoutes } from './app/modules/reviews/reviews.route';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
app.use('/api', CourseRoutes);
app.use('/api', CategoriesRoutes);
app.use('/api', ReviewsRoutes);
app.get('/api', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Express server is running!',
  });
});
// global error handler
app.use(globalErrorHandler);
//For not found api
app.use(notFound);
export default app;
