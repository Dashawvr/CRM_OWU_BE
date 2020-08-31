import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskStatusUpdateFields} from '../../interfaces';
import {updateTaskStatusValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateTaskStatusValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ITaskStatusUpdateFields;

  const {error} = updateTaskStatusValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
