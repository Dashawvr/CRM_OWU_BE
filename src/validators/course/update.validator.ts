import * as Joi from 'Joi';

import {courseNameRegExp} from '../../constants';

export const updateCourseValidator = Joi.object({
  name: Joi.string().regex(courseNameRegExp).min(3).max(100).trim(),
  price: Joi.number().integer().positive()
});
