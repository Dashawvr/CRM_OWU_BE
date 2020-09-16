import {NextFunction, Response} from 'express';

import {IFileRequestExtended} from '../../interfaces';
import {IApplicationFile} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {applicationFileService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsApplicationFileExists = async (req: IFileRequestExtended<IApplicationFile>, res: Response, next: NextFunction):
  Promise<void> => {
  try {
    const {file_id} = req.params;

    const {error} = idValidator.validate(+file_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const file = await applicationFileService.getById(+file_id) as IApplicationFile;

    if (!file) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.file = file;
    next();

  } catch (error) {
    next(error);
  }
};
