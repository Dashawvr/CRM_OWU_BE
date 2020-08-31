import {ITask} from '../../database';

export interface ITaskResponse {
  rows: ITask[];
  count: number;
}
