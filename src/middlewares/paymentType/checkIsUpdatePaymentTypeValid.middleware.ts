import {NextFunction, Response} from 'express';

import {IPaymentTypeUpdateFields, IRequestExtended} from '../../interfaces';
import {updatePaymentTypeValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdatePaymentTypeValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IPaymentTypeUpdateFields;

  const {error} = updatePaymentTypeValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
