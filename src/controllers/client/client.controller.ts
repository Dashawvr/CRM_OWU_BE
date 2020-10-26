import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IClientParams, IClientRequestExtended, IClientUpdateFields} from '../../interfaces';
import {IClient} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientFileService, clientService} from '../../services';

class ClientController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = req.files as FileArray;

      const {id} = await clientService.create(req.body as IClient);

      if (files) {
        await clientFileService.bulkCreate(id, files);
      }

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IClientRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const client = req.client as IClient;

      await clientService.update(client, req.body as IClientUpdateFields);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IClientRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.client as IClient;

      await clientService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients = await clientService.getAll(req.query as IClientParams);

      res.json({
        data: clients
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IClientRequestExtended, res: Response, next: NextFunction): void {
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
