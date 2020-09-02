import {ICity} from '../../database';

export interface ICityResponse {
  rows: ICity[];
  count: number;
}
