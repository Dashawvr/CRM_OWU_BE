import {NextFunction, Response} from 'express';

import {IPaymentStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {updateStatusValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdatePaymentStatusValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IPaymentStatusUpdateFields;

  const {error} = updateStatusValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
