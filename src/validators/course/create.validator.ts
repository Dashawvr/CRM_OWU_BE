import * as Joi from 'Joi';

import {courseNameRegExp} from '../../constants';

export const createCourseValidator = Joi.object({
  name: Joi.string().regex(courseNameRegExp).min(3).max(100).trim().required(),
  price: Joi.number().integer().positive().required()
});
