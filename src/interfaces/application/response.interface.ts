import {IApplication} from '../../database';

export interface IApplicationResponse {
  rows: IApplication[];
  count: number;
}
