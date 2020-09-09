import {NextFunction, Response} from 'express';

import {IClientParams, IClientUpdateFields, IRequestExtended} from '../../interfaces';
import {IClient} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientService} from '../../services';

class ClientController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await clientService.create(req.body as IClient);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.client as IClient;

      await clientService.update(id, req.body as IClientUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.client as IClient;

      await clientService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients = await clientService.getAll(req.query as IClientParams);

      res.json({
        data: clients
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const client = req.client as IClient;

      res.json({
        data: client
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientController = new ClientController();
