import {Request} from 'express-serve-static-core';

import {
  IClient,
  ITask,
  ITaskStatus,
  IUser
} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  task?: ITask;
  taskStatus?: ITaskStatus
  client?: IClient
  access_token?: string;
}
