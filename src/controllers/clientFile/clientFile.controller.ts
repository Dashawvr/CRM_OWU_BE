import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IFileParams, IFileRequestExtended} from '../../interfaces';
import {IClientFile} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {clientFileService} from '../../services';

class ClientFileController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
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

  async delete(req: IFileRequestExtended<IClientFile>, res: Response, next: NextFunction): Promise<void> {
    try {
      await clientFileService.delete(req.file as IClientFile);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = await clientFileService.getAll(req.query as IFileParams);

      res.json({
        data: files
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IFileRequestExtended<IClientFile>, res: Response, next: NextFunction): void {
    try {
      const file = req.file as IClientFile;

      res.json({
        data: file
      });

    } catch (error) {
      next(error);
    }
  }
}

export const clientFileController = new ClientFileController();
