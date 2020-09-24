import {NextFunction, Request, Response} from 'express';

import {IUserParams, IUserRequestExtended, IUserUpdateFields} from '../../interfaces';
import {IUser} from '../../database';
import {userService} from '../../services';
import {ResponseStatusCodes} from '../../constants';

class UserController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await userService.create(req.body as IUser);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IUserRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user as IUser;

      await userService.update(user, req.body as IUserUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IUserRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.user as IUser;

      await userService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await userService.getAll(req.query as IUserParams);

      res.json({
        data: users
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IUserRequestExtended, res: Response, next: NextFunction): void {
    try {
      const user = req.user as IUser;

      res.json({
        data: user
      });

    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
