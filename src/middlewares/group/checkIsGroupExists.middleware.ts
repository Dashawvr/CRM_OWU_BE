import {NextFunction, Response} from 'express';

import {IGroupRequestExtended} from '../../interfaces';
import {IGroup} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {groupService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsGroupExists = async (req: IGroupRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {group_id} = req.params;

    if (!group_id) {
      return next();
    }

    const {error} = idValidator.validate(+group_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.BAD_REQUEST,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const group = await groupService.getById(+group_id) as IGroup;

    if (!group) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
        errors.NOT_FOUND_ENTITY_NOT_PRESENT.code));
    }

    req.group = group;
    next();

  } catch (error) {
    next(error);
  }
};
