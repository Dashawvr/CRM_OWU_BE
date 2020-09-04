import {IPaymentStatus} from '../../database';

export interface IPaymentStatusResponse {
  rows: IPaymentStatus[];
  count: number;
}
