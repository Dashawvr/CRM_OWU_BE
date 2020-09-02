import {IGroup} from '../../database';

export interface IGroupResponse {
  rows: IGroup[];
  count: number;
}
