import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {ResponseStatusCodes} from '../../constants';
import {fileOptions} from '../../configs';
import {ErrorHandler, errors} from '../../errors';

export const checkIsFilesValid = (req: Request, res: Response, next: NextFunction): void => {
  try {

    if (!req.files) {
      return next();
    }

    const {files} = req.files as FileArray;

    const data = Array.isArray(files) ? files : [files];

    data.forEach(({mimetype, size, name}) => {

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
