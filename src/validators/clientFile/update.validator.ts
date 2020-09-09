import * as Joi from 'Joi';

import {fileOptions} from '../../configs';

export const updateClientFileValidator = Joi.object({
  name: Joi.string().min(3).max(100).trim(),
  path: Joi.string().max(400).trim(),
  document_type: Joi.string().valid(fileOptions.DOCUMENT_MIMETYPES).trim(),
  client_id: Joi.number().integer().positive()
});
