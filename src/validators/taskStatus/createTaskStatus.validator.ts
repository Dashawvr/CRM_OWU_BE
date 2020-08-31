import * as Joi from 'Joi';

import {taskStatusColorRegExp, taskStatusNameRegExp} from '../../constants';

export const createTaskStatusValidator = Joi.object({
  name: Joi.string().regex(taskStatusNameRegExp).min(5).max(255).trim().required(),
  color: Joi.string().regex(taskStatusColorRegExp).trim().required(),
  description: Joi.string().max(4000).trim().required()
});
