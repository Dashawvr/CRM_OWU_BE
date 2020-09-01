import {IClient} from '../../database';

export interface IClientResponse {
  rows: IClient[];
  count: number;
}
