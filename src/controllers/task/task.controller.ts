import {NextFunction, Request, Response} from 'express';

import {ITaskParams, ITaskRequestExtended, ITaskUpdateFields} from '../../interfaces';
import {ITask} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskService} from '../../services';

class TaskController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await taskService.create(req.body as ITask);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: ITaskRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;

      await taskService.update(id, req.body as ITaskUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: ITaskRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;

      await taskService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tasks = await taskService.getAll(req.query as ITaskParams);

      res.json({
        data: tasks
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: ITaskRequestExtended, res: Response, next: NextFunction): void {
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
