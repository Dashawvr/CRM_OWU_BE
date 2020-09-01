import {IComment} from '../../database';

export interface ICommentResponse {
  rows: IComment[];
  count: number;
}
