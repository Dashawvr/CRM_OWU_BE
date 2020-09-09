import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskStatusParams, ITaskStatusUpdateFields} from '../../interfaces';
import {ITaskStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskStatusService} from '../../services';

class TaskStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await taskStatusService.create(req.body as ITaskStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.taskStatus as ITaskStatus;

      await taskStatusService.update(id, req.body as ITaskStatusUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.taskStatus as ITaskStatus;

      await taskStatusService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskStatuses = await taskStatusService.getAll(req.query as ITaskStatusParams);

      res.json({
        data: taskStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const taskStatus = req.taskStatus as ITaskStatus;

      res.json({
        data: taskStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const taskStatusController = new TaskStatusController();
