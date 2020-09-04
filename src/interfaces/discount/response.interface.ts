import {IDiscount} from '../../database';

export interface IDiscountResponse {
  rows: IDiscount[];
  count: number;
}
