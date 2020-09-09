import * as Joi from 'Joi';

import {taskStatusColorRegExp, taskStatusNameRegExp} from '../../constants';

export const updateTaskStatusValidator = Joi.object({
  name: Joi.string().regex(taskStatusNameRegExp).min(5).max(255).trim(),
  color: Joi.string().regex(taskStatusColorRegExp).trim(),
  description: Joi.string().max(4000).trim()
});
