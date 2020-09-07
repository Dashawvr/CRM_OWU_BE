import {NextFunction, Response} from 'express';

import {IRequestExtended, ISourceParams, ISourceUpdateFields} from '../../interfaces';
import {ISource} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {sourceService} from '../../services';

class SourceController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const source = req.body as ISource;

      await sourceService.create(source);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.source as ISource;
      const updateFields = req.body as ISourceUpdateFields;

      await sourceService.update(id, updateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.source as ISource;

      await sourceService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.query as ISourceParams;

      const sources = await sourceService.getAll(params);

      res.json({
        data: sources
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.source as ISource;

      const source = await sourceService.getById(id);

      res.json({
        data: source
      });

    } catch (error) {
      next(error);
    }
  }
}

export const sourceController = new SourceController();
