import {Request} from 'express-serve-static-core';

import {IApplication} from '../../database';

export interface IApplicationRequestExtended extends Request {
  application?: IApplication;
}
