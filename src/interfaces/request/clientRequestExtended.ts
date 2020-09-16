import {Request} from 'express-serve-static-core';

import {IClient} from '../../database';

export interface IClientRequestExtended extends Request {
  client?: IClient;
}
