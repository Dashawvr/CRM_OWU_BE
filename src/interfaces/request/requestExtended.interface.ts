import {Request} from 'express-serve-static-core';

import {IUser} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  access_token?: string;
}
