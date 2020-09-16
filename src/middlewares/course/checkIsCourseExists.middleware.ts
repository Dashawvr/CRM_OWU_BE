import {NextFunction, Response} from 'express';

import {ICourseRequestExtended} from '../../interfaces';
import {ICourse} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {courseService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsCourseExists = async (req: ICourseRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {course_id} = req.body.course_id ? req.body : req.params;

    if (!course_id) {
      return next();
    }

    const {error} = idValidator.validate(+course_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const course = await courseService.getById(+course_id) as ICourse;

    if (!course) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.course = course;
    next();

  } catch (error) {
    next(error);
  }
};
