import * as Joi from 'Joi';

import {withoutNumbers} from '../../constants';

export const createCourseValidator = Joi.object({
  name: Joi.string().regex(withoutNumbers).min(3).max(100).trim().required(),
  price: Joi.number().integer().positive().required()
});
