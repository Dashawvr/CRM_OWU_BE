import {NextFunction, Response} from 'express';

import {IClientStatusParams, IClientStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {IClientStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientStatusService} from '../../services';

class ClientStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const clientStatus = req.body as IClientStatus;

      await clientStatusService.create(clientStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.clientStatus as IClientStatus;
      const updateFields = req.body as IClientStatusUpdateFields;

      await clientStatusService.update(id, updateFields);

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
      const params = req.query as IClientStatusParams;

      const clientStatuses = await clientStatusService.getAll(params);

      res.json({
        data: clientStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.clientStatus as IClientStatus;

      const clientStatus = await clientStatusService.getById(id);

      res.json({
        data: clientStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientStatusController = new ClientStatusController();
