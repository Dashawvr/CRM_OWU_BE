import {Request} from 'express-serve-static-core';

import {
  ITask,
  ITaskStatus,
  IUser
} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  task?: ITask;
  taskStatus?: ITaskStatus
  access_token?: string;
}
