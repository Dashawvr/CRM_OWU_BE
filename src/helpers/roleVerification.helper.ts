import {
  CreateRule,
  DeleteRule,
  ResponseStatusCodes,
  UpdateRule,
  UserAction,
  UserRole
} from '../constants';
import {ErrorHandler} from '../errors';

export const roleVerification = (method: UserAction, role: UserRole): UserRole[] => {

  switch (method) {
    case UserAction.CREATE_USER:
      return CreateRule[role];
    case UserAction.UPDATE_USER:
      return UpdateRule[role];
    case UserAction.DELETE_USER:
      return DeleteRule[role];
    default:
      throw new ErrorHandler(ResponseStatusCodes.SERVER_ERROR, 'Wrong action type');
  }
};
