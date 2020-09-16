import {Request} from 'express-serve-static-core';

export interface ITypeRequestExtended<T> extends Request {
  type?: T;
}
