import {NextFunction, Response} from 'express';

import {IClientStatusParams, IClientStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {IClientStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientStatusService} from '../../services';

class ClientStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await clientStatusService.create(req.body as IClientStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.clientStatus as IClientStatus;

      await clientStatusService.update(id, req.body as IClientStatusUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.clientStatus as IClientStatus;

      await clientStatusService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const clientStatuses = await clientStatusService.getAll(req.query as IClientStatusParams);

      res.json({
        data: clientStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const clientStatus = req.clientStatus as IClientStatus;

      res.json({
        data: clientStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientStatusController = new ClientStatusController();
