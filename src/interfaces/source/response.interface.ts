import {ISource} from '../../database';

export interface ISourceResponse {
  rows: ISource[];
  count: number;
}
