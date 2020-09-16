import {NextFunction, Request, Response} from 'express';

import {IClientUpdateFields} from '../../interfaces';
import {updateClientValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateClientValid = (req: Request, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IClientUpdateFields;

  const {error} = updateClientValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
