import {NextFunction, Response} from 'express';

import {ICommentRequestExtended} from '../../interfaces';
import {IComment, IUser} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';

export const checkCommentUpdateRule = (req: ICommentRequestExtended, res: Response, next: NextFunction): void => {

  const {id} = req.authUser as IUser;
  const {user_id} = req.comment as IComment;

  if (user_id !== id) {
    return next(
      new ErrorHandler(
        ResponseStatusCodes.FORBIDDEN,
        errors.FORBIDDEN_NO_PERMISSION.message,
        errors.FORBIDDEN_NO_PERMISSION.code
      ));
  }
  next();
};
