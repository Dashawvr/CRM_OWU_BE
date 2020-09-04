import {NextFunction, Response} from 'express';

import {ICourseUpdateFields, IRequestExtended} from '../../interfaces';
import {updateCourseValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateCourseValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ICourseUpdateFields;

  const {error} = updateCourseValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
