import {NextFunction, Response} from 'express';
import {verify, VerifyErrors} from 'jsonwebtoken';

import {IAuthRequestExtended} from '../../interfaces';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {authService, userService} from '../../services';
import {config} from '../../configs';

export const checkResetToken = async (req: IAuthRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  try {
    const {reset_token} = req.params;

    if (!reset_token) {
      return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, 'No token'));
    }

    verify(reset_token, config.JWT_EMAIL_FORGOT_PASSWORD, async (err: VerifyErrors | null) => {
      if (err) {
        await authService.deleteResetToken(reset_token);

        return next(new ErrorHandler(ResponseStatusCodes.UNAUTHORIZED, 'Invalid token'));
      }
    });

    const user = await userService.getByResetToken(reset_token);

    if (!user) {
      return next(new ErrorHandler(ResponseStatusCodes.NOT_FOUND, errors.NOT_FOUND_ENTITY_NOT_PRESENT.message));
    }

    req.user = user;
    req.reset_token = reset_token;

    next();

  } catch (error) {
    next(error);
  }
};
