import {NextFunction, Response} from 'express';

import {IDiscountUpdateFields, IRequestExtended} from '../../interfaces';
import {updateDiscountValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateDiscountValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IDiscountUpdateFields;

  const {error} = updateDiscountValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
