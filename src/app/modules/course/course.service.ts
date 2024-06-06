import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
const getAllCoursesFromDB = async () => {
  const result = await Course.find();
  return result;
};
/* const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findOne({ id });
  return result;
};
 */
export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
};
