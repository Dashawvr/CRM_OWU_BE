import {NextFunction, Request, Response} from 'express';

import {ITask} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createTaskValidator} from '../../validators';

export const checkIsCreateTaskValid = (req: Request, res: Response, next: NextFunction): void => {
  const task = req.body as ITask;

  const {error} = createTaskValidator.validate(task);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
