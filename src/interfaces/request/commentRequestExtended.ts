import {Request} from 'express-serve-static-core';

import {IComment, IUser} from '../../database';

export interface ICommentRequestExtended extends Request {
  comment?: IComment;
  authUser?: IUser;
}
