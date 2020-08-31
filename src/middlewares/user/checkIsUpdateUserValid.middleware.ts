import {NextFunction, Response} from 'express';

import {IRequestExtended, IUserUpdateFields} from '../../interfaces';
import {updateUserValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateUserValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IUserUpdateFields;

  const {error} = updateUserValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
