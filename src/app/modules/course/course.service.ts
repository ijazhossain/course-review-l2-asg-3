import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const { minPrice, maxPrice, tags, sortBy, sortOrder, level } = query;
  let queryObj = { ...query };
  const excludeFields = ['sortBy', 'sortOrder', 'limit', 'page'];
  excludeFields.forEach((el) => delete queryObj[el]);

  //   filterBased On max and min price
  if (maxPrice && minPrice) {
    queryObj = {
      price: { $lte: Number(maxPrice), $gte: Number(minPrice) },
      ...queryObj,
    };
    delete queryObj['maxPrice'];
    delete queryObj['minPrice'];
  }
  //   filter based on tags

  if (tags) {
    queryObj = {
      'tags.name': tags,
      ...queryObj,
    };
    delete queryObj['tags'];
  }
  // filter for levels
  if (level) {
    queryObj = {
      'details.level': level,
      ...queryObj,
    };
    delete queryObj['level'];
  }
  const filterQuery = Course.find(queryObj);
  // for sort
  let sortOptions: string = 'title';
  if (sortBy) {
    if (sortOrder === 'desc') {
      sortOptions = `-${query.sortBy}`;
    } else {
      sortOptions = query.sortBy as string;
    }
  }
  const sortQuery = filterQuery.sort(sortOptions);
  // for limit
  let page = 1;
  let limit = 1;
  let skip = 0;
  if (query?.limit) {
    limit = Number(query.limit);
  }
  if (query?.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }
  const paginateQuery = sortQuery.skip(skip);
  const limitQuery = await paginateQuery.limit(limit);
  return limitQuery;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
};
