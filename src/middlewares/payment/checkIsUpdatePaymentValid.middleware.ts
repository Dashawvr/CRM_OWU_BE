import {NextFunction, Response} from 'express';

import {IPaymentUpdateFields, IRequestExtended} from '../../interfaces';
import {updatePaymentValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdatePaymentValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IPaymentUpdateFields;

  const {error} = updatePaymentValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
