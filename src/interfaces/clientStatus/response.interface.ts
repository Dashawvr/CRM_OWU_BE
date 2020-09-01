import {IClientStatus} from '../../database';

export interface IClientStatusResponse {
  rows: IClientStatus[];
  count: number;
}
