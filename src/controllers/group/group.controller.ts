import {NextFunction, Response} from 'express';

import {IGroupParams, IGroupUpdateFields, IRequestExtended} from '../../interfaces';
import {IGroup} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {groupService} from '../../services';

class GroupController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await groupService.create(req.body as IGroup);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.group as IGroup;

      await groupService.update(id, req.body as IGroupUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.group as IGroup;

      await groupService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const groups = await groupService.getAll(req.query as IGroupParams);

      res.json({
        data: groups
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const group = req.group as IGroup;

      res.json({
        data: group
      });

    } catch (error) {
      next(error);
    }
  }
}

export const groupController = new GroupController();
