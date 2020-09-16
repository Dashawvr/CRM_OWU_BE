import {Request} from 'express-serve-static-core';

import {ICity} from '../../database';

export interface ICityRequestExtended extends Request {
  city?: ICity;
}
