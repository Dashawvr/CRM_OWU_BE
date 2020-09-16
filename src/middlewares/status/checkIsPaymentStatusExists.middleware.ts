import {NextFunction, Response} from 'express';

import {IStatusRequestExtended} from '../../interfaces';
import {IPaymentStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {paymentStatusService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsPaymentStatusExists = async (req: IStatusRequestExtended<IPaymentStatus>, res: Response, next: NextFunction):
  Promise<void> => {
  try {
    const {status_id} = req.body.status_id ? req.body : req.params;

    if (!status_id) {
      return next();
    }

    const {error} = idValidator.validate(+status_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const status = await paymentStatusService.getById(+status_id) as IPaymentStatus;

    if (!status) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.status = status;
    next();

  } catch (error) {
    next(error);
  }
};
