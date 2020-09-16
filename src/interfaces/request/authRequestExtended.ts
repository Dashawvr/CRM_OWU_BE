import {Request} from 'express-serve-static-core';

import {IUser} from '../../database';

export interface IAuthRequestExtended extends Request {
  authUser?: IUser;
  user?: IUser;
  access_token?: string;
}
