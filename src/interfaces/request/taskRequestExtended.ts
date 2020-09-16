import {Request} from 'express-serve-static-core';

import {ITask} from '../../database';

export interface ITaskRequestExtended extends Request {
  task?: ITask;
}
