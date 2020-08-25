import {IUser} from '../../database';

export interface IUserResponse {
  rows: IUser[],
  count: number
}
