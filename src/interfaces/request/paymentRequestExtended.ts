import {Request} from 'express-serve-static-core';

import {IPayment} from '../../database';

export interface IPaymentRequestExtended extends Request {
  payment?: IPayment;
}
