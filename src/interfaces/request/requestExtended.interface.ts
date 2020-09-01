import {Request} from 'express-serve-static-core';

import {
  IClient, IClientStatus,
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
  clientStatus?: IClientStatus
  access_token?: string;
}
