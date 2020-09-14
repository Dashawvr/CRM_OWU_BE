import {IApplicationFile} from '../../database';

export interface IApplicationFileResponse {
  rows: IApplicationFile[];
  count: number;
}
