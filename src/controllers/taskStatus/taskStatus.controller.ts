import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskStatusParams, ITaskStatusUpdateFields} from '../../interfaces';
import {ITaskStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskStatusService} from '../../services';

class TaskStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskStatus = req.body as ITaskStatus;

      await taskStatusService.create(taskStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.taskStatus as ITaskStatus;
      const updateFields = req.body as ITaskStatusUpdateFields;

      await taskStatusService.update(id, updateFields);

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
      const params = req.query as ITaskStatusParams;

      const taskStatuses = await taskStatusService.getAll(params);

      res.json({
        data: taskStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.taskStatus as ITaskStatus;

      const taskStatus = await taskStatusService.getById(id);

      res.json({
        data: taskStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const taskStatusController = new TaskStatusController();
