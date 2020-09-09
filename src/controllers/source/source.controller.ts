import {NextFunction, Response} from 'express';

import {IRequestExtended, ISourceParams, ISourceUpdateFields} from '../../interfaces';
import {ISource} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {sourceService} from '../../services';

class SourceController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await sourceService.create(req.body as ISource);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.source as ISource;

      await sourceService.update(id, req.body as ISourceUpdateFields);

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
      const sources = await sourceService.getAll(req.query as ISourceParams);

      res.json({
        data: sources
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const source = req.source as ISource;

      res.json({
        data: source
      });

    } catch (error) {
      next(error);
    }
  }
}

export const sourceController = new SourceController();
