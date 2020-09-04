import {ICourse} from '../../database';

export interface ICourseResponse {
  rows: ICourse[];
  count: number;
}
