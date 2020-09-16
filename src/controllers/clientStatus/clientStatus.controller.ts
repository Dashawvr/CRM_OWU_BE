import {NextFunction, Request, Response} from 'express';

import {IStatusParams, IStatusRequestExtended, IStatusUpdateFields} from '../../interfaces';
import {IClientStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientStatusService} from '../../services';

class ClientStatusController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await clientStatusService.create(req.body as IClientStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IStatusRequestExtended<IClientStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as IClientStatus;

      await clientStatusService.update(id, req.body as IStatusUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IStatusRequestExtended<IClientStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as IClientStatus;

      await clientStatusService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const statuses = await clientStatusService.getAll(req.query as IStatusParams);

      res.json({
        data: statuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IStatusRequestExtended<IClientStatus>, res: Response, next: NextFunction): void {
    try {
      const status = req.status as IClientStatus;

      res.json({
        data: status
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientStatusController = new ClientStatusController();
