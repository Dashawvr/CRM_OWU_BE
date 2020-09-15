import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ITaskStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {taskStatusService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsTaskStatusExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {status_id} = req.body.status_id ? req.body : req.params;

    if (!status_id) {
      return next();
    }

    const {error} = idValidator.validate(+status_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const taskStatus = await taskStatusService.getById(+status_id) as ITaskStatus;

    if (!taskStatus) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.taskStatus = taskStatus;
    next();

  } catch (error) {
    next(error);
  }
};
