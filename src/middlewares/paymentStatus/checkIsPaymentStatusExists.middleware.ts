import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IPaymentStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {paymentStatusService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsPaymentStatusExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {status_id} = req.params;

    const {error} = idValidator.validate(status_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.NOT_FOUND,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const paymentStatus = await paymentStatusService.getById(+status_id) as IPaymentStatus;

    if (!paymentStatus) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_PAYMENT_STATUS_NOT_PRESENT.message,
        errors.NOT_FOUND_PAYMENT_STATUS_NOT_PRESENT.code));
    }

    req.paymentStatus = paymentStatus;
    next();

  } catch (error) {
    next(error);
  }
};
