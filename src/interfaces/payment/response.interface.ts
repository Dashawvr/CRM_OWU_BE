import {IPayment} from '../../database';

export interface IPaymentResponse {
  rows: IPayment[];
  count: number;
}
