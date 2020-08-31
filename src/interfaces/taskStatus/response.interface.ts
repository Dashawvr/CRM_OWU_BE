import {ITaskStatus} from '../../database';

export interface ITaskStatusResponse {
  rows: ITaskStatus[];
  count: number;
}
