import {NextFunction, Request, Response} from 'express';

import {IStatusUpdateFields} from '../../interfaces';
import {updateStatusValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateStatusValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IStatusUpdateFields;

  const {error} = updateStatusValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
