import {NextFunction, Response} from 'express';

import {IGroupParams, IGroupUpdateFields, IRequestExtended} from '../../interfaces';
import {IGroup} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {groupService} from '../../services';

class GroupController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const group = req.body as IGroup;

      await groupService.create(group);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.group as IGroup;
      const updateFields = req.body as IGroupUpdateFields;

      await groupService.update(id, updateFields);

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
      const params = req.query as IGroupParams;

      const groups = await groupService.getAll(params);

      res.json({
        data: groups
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.group as IGroup;

      const group = await groupService.getById(id);

      res.json({
        data: group
      });

    } catch (error) {
      next(error);
    }
  }
}

export const groupController = new GroupController();
