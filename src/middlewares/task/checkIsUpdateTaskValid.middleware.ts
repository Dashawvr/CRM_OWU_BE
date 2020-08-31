import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskUpdateFields} from '../../interfaces';
import {updateTaskValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateTaskValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ITaskUpdateFields;

  const {error} = updateTaskValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
