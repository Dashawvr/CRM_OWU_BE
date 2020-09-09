import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskParams, ITaskUpdateFields} from '../../interfaces';
import {ITask} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskService} from '../../services';

class TaskController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await taskService.create(req.body as ITask);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;

      await taskService.update(id, req.body as ITaskUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;

      await taskService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const tasks = await taskService.getAll(req.query as ITaskParams);

      res.json({
        data: tasks
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const task = req.task as ITask;

      res.json({
        data: task
      });

    } catch (error) {
      next(error);
    }
  }
}

export const taskController = new TaskController();
