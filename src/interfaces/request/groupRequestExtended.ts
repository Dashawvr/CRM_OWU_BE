import {Request} from 'express-serve-static-core';

import {IGroup} from '../../database';

export interface IGroupRequestExtended extends Request {
  group?: IGroup;
}
