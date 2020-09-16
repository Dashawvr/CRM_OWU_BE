import {Request} from 'express-serve-static-core';

import {IUser} from '../../database';

export interface IUserRequestExtended extends Request {
  user?: IUser;
}
