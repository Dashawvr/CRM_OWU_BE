import {Request} from 'express-serve-static-core';

import {
  ITask,
  IUser
} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  task?: ITask;
  access_token?: string;
}
