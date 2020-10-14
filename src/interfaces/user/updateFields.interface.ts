import {UserRole} from '../../constants/enums';

export interface IUserUpdateFields {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  role?: UserRole;
  cities?: Array<number>;
}
