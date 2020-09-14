import {NextFunction, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IApplicationFileParams, IRequestExtended} from '../../interfaces';
import {IApplicationFile} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {applicationFileService} from '../../services';

class ApplicationFileController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {application_id} = req.body;
      const files = req.files as FileArray;

      if (files) {
        await applicationFileService.bulkCreate(+application_id, files);
      }

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await applicationFileService.delete(req.applicationFile as IApplicationFile);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = await applicationFileService.getAll(req.query as IApplicationFileParams);

      res.json({
        data: files
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const file = req.applicationFile as IApplicationFile;

      res.json({
        data: file
      });

    } catch (error) {
      next(error);
    }
  }
}

export const applicationFileController = new ApplicationFileController();
