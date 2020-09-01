import {NextFunction, Response} from 'express';

import {IClientParams, IClientUpdateFields, IRequestExtended} from '../../interfaces';
import {IClient} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientService} from '../../services';

class ClientController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const client = req.body as IClient;

      await clientService.create(client);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.client as IClient;
      const updateFields = req.body as IClientUpdateFields;

      await clientService.update(id, updateFields);

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
      const params = req.query as IClientParams;

      const clients = await clientService.getAll(params);

      res.json({
        data: clients
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.client as IClient;

      const client = await clientService.getById(id);

      res.json({
        data: client
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientController = new ClientController();
