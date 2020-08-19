import {Request, Response} from 'express';

import {ResponseStatusCodesEnum} from '../../constants';
import {ErrorHandler, errors} from '../../errors';

export class NotFoundController {
  public all(req: Request, res: Response): void {
    throw new ErrorHandler(
      ResponseStatusCodesEnum.NOT_FOUND,
      errors.NOT_FOUND_ROUTE.message,
      errors.NOT_FOUND_ROUTE.code
    );
  }
}

export const notFoundController = new NotFoundController();
