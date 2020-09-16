import {Request} from 'express-serve-static-core';

import {ICourse} from '../../database';

export interface ICourseRequestExtended extends Request {
  course?: ICourse;
}
