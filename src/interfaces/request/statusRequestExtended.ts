import {Request} from 'express-serve-static-core';

export interface IStatusRequestExtended<T> extends Request {
  status?: T;
}
