import {NextFunction, Request, Response} from 'express';

import {IGroupParams, IGroupRequestExtended, IGroupUpdateFields} from '../../interfaces';
import {IGroup} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {groupService} from '../../services';

class GroupController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await groupService.create(req.body as IGroup);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async update(req: IGroupRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const group = req.group as IGroup;

      await groupService.update(group, req.body as IGroupUpdateFields);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IGroupRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.group as IGroup;

      await groupService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT).end();

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const groups = await groupService.getAll(req.query as IGroupParams);

      res.json({
        data: groups
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IGroupRequestExtended, res: Response, next: NextFunction): void {
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
