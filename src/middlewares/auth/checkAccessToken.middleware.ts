import {NextFunction, Response} from 'express';
import {verify, VerifyErrors} from 'jsonwebtoken';

import {IRequestExtended} from '../../interfaces';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {userService} from '../../services';
import {config} from '../../configs';

export const checkAccessToken = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {

  const access_token = req.get('Authorization') as string;

  if (!access_token) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, 'No token'));
  }

  verify(access_token, config.JWT_SECRET, (err: VerifyErrors | null) => {
    if (err) {
      return next(new ErrorHandler(ResponseStatusCodes.UNAUTHORIZED, 'Invalid token'));
    }
  });

  const user = await userService.getByAccessToken(access_token);

  if (!user) {
    return next(new ErrorHandler(ResponseStatusCodes.NOT_FOUND, errors.NOT_FOUND_USER_NOT_PRESENT.message));
  }

  req.user = user;
  req.access_token = access_token;

  next();
};
