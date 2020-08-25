import {NextFunction, Response} from 'express';
import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {IRequestExtended} from '../../interfaces';
import {userService} from '../../services/user';
import {loginValidator} from '../../validators';

export const checkIsUserRegistered = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {

  const {login} = req.body;

  const isLoginValid = loginValidator.validate(login);

  if (isLoginValid.error) {
    return next(new ErrorHandler(
      ResponseStatusCodesEnum.BAD_REQUEST,
      errors.BAD_REQUEST_WRONG_PARAMS.message,
      errors.BAD_REQUEST_WRONG_PARAMS.code
    ));
  }

  const user = await userService.getByLogin(login);

  if (!user) {
    return next(
      new ErrorHandler(
        ResponseStatusCodesEnum.NOT_FOUND,
        errors.NOT_FOUND_USER_NOT_PRESENT.message,
        errors.NOT_FOUND_USER_NOT_PRESENT.code
      ));
  }

  req.user = user;
  next();
};
