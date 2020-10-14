import * as Joi from 'joi';

import {emailRegExp} from '../../constants';

export const emailValidator = Joi.string().regex(emailRegExp).trim().required();
