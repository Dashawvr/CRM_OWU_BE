import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IClient} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {clientService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsClientExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {client_id} = req.body.client_id ? req.body : req.params;

    if (!client_id) {
      return next();
    }

    const {error} = idValidator.validate(+client_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const client = await clientService.getById(+client_id) as IClient;

    if (!client) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.client = client;
    next();

  } catch (error) {
    next(error);
  }
};
