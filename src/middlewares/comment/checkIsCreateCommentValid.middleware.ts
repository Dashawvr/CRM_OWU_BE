import {NextFunction, Request, Response} from 'express';

import {IComment} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createCommentValidator} from '../../validators';

export const checkIsCreateCommentValid = (req: Request, res: Response, next: NextFunction): void => {
  const comment = req.body as IComment;

  const {error} = createCommentValidator.validate(comment);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
