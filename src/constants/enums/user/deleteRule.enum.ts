import {UserRole} from './role.enum';

export const DeleteRule = {
  [UserRole.ROLE_SUPER_ADMIN]: [UserRole.ROLE_ADMIN, UserRole.ROLE_MANAGER],
  [UserRole.ROLE_ADMIN]: [],
  [UserRole.ROLE_MANAGER]: []
};
