import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IClientStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {clientStatusService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsClientStatusExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
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

    const clientStatus = await clientStatusService.getById(+status_id) as IClientStatus;

    if (!clientStatus) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_CLIENT_STATUS_NOT_PRESENT.message,
        errors.NOT_FOUND_CLIENT_STATUS_NOT_PRESENT.code));
    }

    req.clientStatus = clientStatus;
    next();

  } catch (error) {
    next(error);
  }
};
