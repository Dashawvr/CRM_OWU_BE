import {NextFunction, Request, Response} from 'express';

import {ICourseUpdateFields} from '../../interfaces';
import {updateCourseValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateCourseValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ICourseUpdateFields;

  const {error} = updateCourseValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
