/* eslint-disable @typescript-eslint/no-explicit-any */

import { CourseServices } from './course.service';
import catchAsync from '../../../middlewares/globalErrorHandler';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  res.status(200).json({
    success: false,
    message: 'Course is created successfully',
    data: result,
  });
});
const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCoursesFromDB();
  res.status(200).json({
    success: false,
    message: 'All courses are retrieved successfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourses,
};
