import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {IApplication} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {applicationService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsApplicationExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {application_id} = req.params;

    const {error} = idValidator.validate(application_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.NOT_FOUND,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const application = await applicationService.getById(+application_id) as IApplication;

    if (!application) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_APPLICATION_NOT_PRESENT.message,
        errors.NOT_FOUND_APPLICATION_NOT_PRESENT.code));
    }

    req.application = application;
    next();

  } catch (error) {
    next(error);
  }
};
