import {NextFunction, Response} from 'express';

import {ICommentRequestExtended} from '../../interfaces';
import {IComment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {commentService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsCommentExists = async (req: ICommentRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {comment_id} = req.params;

    if (!comment_id) {
      return next();
    }

    const {error} = idValidator.validate(+comment_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const comment = await commentService.getById(+comment_id) as IComment;

    if (!comment) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.comment = comment;
    next();

  } catch (error) {
    next(error);
  }
};
