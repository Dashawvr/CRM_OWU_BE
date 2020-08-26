import {UserRole} from '../../constants/enums';

export interface IUserUpdateFields {
  login?: string
  password?: string
  name?: string
  surname?: string
  role?: UserRole
}
