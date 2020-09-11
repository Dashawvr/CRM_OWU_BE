import {Request} from 'express-serve-static-core';

import {
  IApplication,
  ICity,
  IClient,
  IClientFile,
  IClientStatus,
  IComment,
  ICourse,
  IDiscount,
  IGroup,
  IPayment,
  IPaymentStatus,
  IPaymentType,
  ISource,
  ITask,
  ITaskStatus,
  IUser
} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  task?: ITask;
  taskStatus?: ITaskStatus;
  client?: IClient;
  clientStatus?: IClientStatus;
  clientFile?: IClientFile;
  comment?: IComment;
  city?: ICity;
  group?: IGroup;
  course?: ICourse;
  application?: IApplication;
  discount?: IDiscount;
  payment?: IPayment;
  paymentStatus?: IPaymentStatus;
  paymentType?: IPaymentType;
  source?: ISource;
  access_token?: string;
}
