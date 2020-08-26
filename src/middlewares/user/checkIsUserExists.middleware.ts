import {NextFunction, Response} from 'express';

import {IUser} from '../../database';
import {userService} from '../../services';
import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IRequestExtended} from '../../interfaces';
import {idValidator} from '../../validators';

export const checkIsUserExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  const {user_id} = req.params;

  const {error} = idValidator.validate(user_id);

  if (error) {
    return next(
      new ErrorHandler(
        ResponseStatusCodesEnum.NOT_FOUND,
        errors.BAD_REQUEST_WRONG_PARAMS.message,
        errors.BAD_REQUEST_WRONG_PARAMS.code));
  }

  const user = await userService.getById(+user_id) as IUser;

  if (!user) {
    return next(new ErrorHandler(
      ResponseStatusCodesEnum.NOT_FOUND,
      errors.NOT_FOUND_USER_NOT_PRESENT.message,
      errors.NOT_FOUND_USER_NOT_PRESENT.code));
  }

  req.user = user;

  next();
};
