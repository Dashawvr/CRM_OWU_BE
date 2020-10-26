import {NextFunction, Request, Response} from 'express';

import {IStatusParams, IStatusRequestExtended, IStatusUpdateFields} from '../../interfaces';
import {ITaskStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskStatusService} from '../../services';

class TaskStatusController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await taskStatusService.create(req.body as ITaskStatus);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async update(req: IStatusRequestExtended<ITaskStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as ITaskStatus;

      await taskStatusService.update(id, req.body as IStatusUpdateFields);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IStatusRequestExtended<ITaskStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as ITaskStatus;

      await taskStatusService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT).end();

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskStatuses = await taskStatusService.getAll(req.query as IStatusParams);

      res.json({
        data: taskStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IStatusRequestExtended<ITaskStatus>, res: Response, next: NextFunction): void {
    try {
      const status = req.status as ITaskStatus;

      res.json({
        data: status
      });

    } catch (error) {
      next(error);
    }
  }
}

export const taskStatusController = new TaskStatusController();
