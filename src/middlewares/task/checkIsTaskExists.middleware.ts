import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ITask} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {taskService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsTaskExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {task_id} = req.params;

    const {error} = idValidator.validate(task_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const task = await taskService.getById(+task_id) as ITask;

    if (!task) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.task = task;
    next();

  } catch (error) {
    next(error);
  }
};
