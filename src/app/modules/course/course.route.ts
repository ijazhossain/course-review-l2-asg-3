import { Router } from 'express';
import { CourseControllers } from './course.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';

const router = Router();
router.post(
  '/api/course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);
router.get('/api/courses', CourseControllers.getAllCourses);
export const CourseRoutes = router;
