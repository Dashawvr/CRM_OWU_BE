import {IPaymentType} from '../../database';

export interface IPaymentTypeResponse {
  rows: IPaymentType[];
  count: number;
}
