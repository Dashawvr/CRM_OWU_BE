import {NextFunction, Response} from 'express';

import {IUserRequestExtended} from '../../interfaces';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {userService} from '../../services';
import {loginValidator} from '../../validators';

export const checkIsUserRegistered = async (req: IUserRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  try {
    const {login} = req.body;

    const isLoginValid = loginValidator.validate(login);

    if (isLoginValid.error) {
      return next(new ErrorHandler(
        ResponseStatusCodes.BAD_REQUEST,
        errors.BAD_REQUEST_WRONG_PARAMS.message,
        errors.BAD_REQUEST_WRONG_PARAMS.code
      ));
    }

    const user = await userService.getByLogin(login);

    if (!user) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.NOT_FOUND,
          errors.NOT_FOUND_ENTITY_NOT_PRESENT.message,
          errors.NOT_FOUND_ENTITY_NOT_PRESENT.code
        ));
    }

    req.user = user;
    next();

  } catch (error) {
    next(error);
  }
};
