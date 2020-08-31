import {NextFunction, Response} from 'express';

import {IRequestExtended, ITaskParams, ITaskUpdateFields} from '../../interfaces';
import {ITask} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {taskService} from '../../services';

class TaskController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = req.body as ITask;

      await taskService.create(task);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;
      const updateFields = req.body as ITaskUpdateFields;

      await taskService.update(id, updateFields);

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
      const params = req.query as ITaskParams;

      const tasks = await taskService.getAll(params);

      res.json({
        data: tasks
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.task as ITask;

      const task = await taskService.getById(id);

      res.json({
        data: task
      });

    } catch (error) {
      next(error);
    }
  }
}

export const taskController = new TaskController();
