import {Request} from 'express-serve-static-core';

export interface IFileRequestExtended<T> extends Request {
  file?: T;
}
