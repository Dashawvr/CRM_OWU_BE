import {NextFunction, Response} from 'express';

import {IRequestExtended, IUserUpdateFields} from '../../interfaces';
import {IUser} from '../../database';
import {userService} from '../../services';
import {ResponseStatusCodes} from '../../constants';

class UserController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.body as IUser;

      await userService.create(user);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.user as IUser;
      const updateFields = req.body as IUserUpdateFields;

      await userService.update(id, updateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.user as IUser;

      await userService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.query;

      const users = await userService.getAll(params);

      res.json({
        data: users
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.user as IUser;

      const user = await userService.getById(id);

      res.json({
        data: user
      });

    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
