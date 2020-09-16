import {NextFunction, Response} from 'express';
import {VerifyErrors} from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';

import {IAuthRequestExtended} from '../../interfaces';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {userService} from '../../services';
import {config} from '../../configs';

export const checkRefreshToken = async (req: IAuthRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  try {
    const refresh_token = req.get('Authorization') as string;

    if (!refresh_token) {
      return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, 'No token'));
    }

    jwt.verify(refresh_token, config.JWT_REFRESH_SECRET, (err: VerifyErrors | null) => {
      if (err) {
        return next(new ErrorHandler(ResponseStatusCodes.FORBIDDEN, 'Bad_tokens'));
      }
    });

    const user = await userService.getByRefreshToken(refresh_token);

    if (!user) {
      return next(new ErrorHandler(ResponseStatusCodes.NOT_FOUND, errors.NOT_FOUND_ENTITY_NOT_PRESENT.message));
    }

    req.user = user;

    next();

  } catch (error) {
    next(error);
  }
};
