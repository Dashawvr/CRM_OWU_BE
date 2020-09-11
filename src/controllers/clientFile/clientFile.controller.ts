import {NextFunction, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IClientFileParams, IRequestExtended} from '../../interfaces';
import {IClientFile} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientFileService} from '../../services';

class ClientFileController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {client_id} = req.body;
      const files = req.files as FileArray;

      if (files) {
        await clientFileService.bulkCreate(+client_id, files);
      }

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await clientFileService.delete(req.clientFile as IClientFile);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = await clientFileService.getAll(req.query as IClientFileParams);

      res.json({
        data: files
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const file = req.clientFile as IClientFile;

      res.json({
        data: file
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientFileController = new ClientFileController();
