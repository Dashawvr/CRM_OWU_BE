import {NextFunction, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IRequestExtended} from '../../interfaces';
import {ResponseStatusCodes} from '../../constants';
import {fileOptions} from '../../configs';
import {ErrorHandler, errors} from '../../errors';

export const checkIsClientFilesValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  try {

    if (!req.files) {
      return next();
    }

    let {files} = req.files as FileArray;

    if (!Array.isArray(files)) {
      files = [files];
    }

    files.forEach(({mimetype, size, name}) => {

      if (!fileOptions.DOCUMENT_MIMETYPES.includes(mimetype)) {
        return next(new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          `File ${name} is not valid`,
          errors.BAD_REQUEST_INVALID_FILE_MIME_TYPE.code));
      }

      if (size > fileOptions.MAX_DOCUMENT_SIZE) {
        return next(new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_MAX_DOCUMENT_SIZE.message,
          errors.BAD_REQUEST_MAX_DOCUMENT_SIZE.code
        ));
      }
    });

    next();
  } catch (error) {
    next(error);
  }
};
