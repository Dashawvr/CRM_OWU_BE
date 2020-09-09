import {IClientFile} from '../../database';

export interface IClientFileResponse {
  rows: IClientFile[];
  count: number;
}
