import {Request} from 'express-serve-static-core';

import {ISource} from '../../database';

export interface ISourceRequestExtended extends Request {
  source?: ISource;
}
