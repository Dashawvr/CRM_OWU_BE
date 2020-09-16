import {Request} from 'express-serve-static-core';

import {IDiscount} from '../../database';

export interface IDiscountRequestExtended extends Request {
  discount?: IDiscount;
}
