import * as Joi from 'Joi';

import {withoutNumbers} from '../../constants';

export const updateCourseValidator = Joi.object({
  name: Joi.string().regex(withoutNumbers).min(3).max(100).trim(),
  price: Joi.number().integer().positive()
});
