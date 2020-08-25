import {NextFunction, Response} from 'express';

import {IRequestExtended, IUserUpdateFields} from '../../interfaces';
import {IUser} from '../../database';
import {userService} from '../../services';
import {ResponseStatusCodesEnum} from '../../constants';

class UserController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    const user = req.body as IUser;

    await userService.create(user);

    res.sendStatus(ResponseStatusCodesEnum.CREATED);
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.user as IUser;
    const updateFields = req.body as IUserUpdateFields;

    await userService.update(id, updateFields);

    res.sendStatus(ResponseStatusCodesEnum.CREATED);
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.user as IUser;

    await userService.delete(id);

    res.sendStatus(ResponseStatusCodesEnum.NO_CONTENT);
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {

  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    const {id} = req.user as IUser;

    const user = await userService.getById(id);

    res.json({
      data: user
    });
  }

}

export const userController = new UserController();
