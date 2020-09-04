import {NextFunction, Request, Response} from 'express';

import {ICourse} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createCourseValidator} from '../../validators';

export const checkIsCreateCourseValid = (req: Request, res: Response, next: NextFunction): void => {
  const course = req.body as ICourse;

  const {error} = createCourseValidator.validate(course);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
