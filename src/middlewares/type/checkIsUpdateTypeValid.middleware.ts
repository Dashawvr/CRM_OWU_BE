import {NextFunction, Request, Response} from 'express';

import {ITypeUpdateFields} from '../../interfaces';
import {updateTypeValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateTypeValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as ITypeUpdateFields;

  const {error} = updateTypeValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
