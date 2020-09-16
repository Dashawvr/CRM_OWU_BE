import {NextFunction, Request, Response} from 'express';

import {IGroupUpdateFields} from '../../interfaces';
import {updateGroupValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateGroupValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IGroupUpdateFields;

  const {error} = updateGroupValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
