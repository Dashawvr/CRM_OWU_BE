import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IFileParams, IFileRequestExtended} from '../../interfaces';
import {
  City,
  Client,
  Course,
  IApplication,
  IApplicationFile
} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {applicationFileService, applicationService} from '../../services';

class ApplicationFileController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {application_id} = req.body;
      const files = req.files as FileArray;

      if (files) {
        await applicationFileService.bulkCreate(+application_id, files);
      }

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async createPDF(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {application_id} = req.params;

      const application = await applicationService.getById(
        +application_id,
        [
          {model: Client},
          {model: Course},
          {model: City}
        ]
      ) as IApplication;

      await applicationFileService.generatePDFFile(application);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IFileRequestExtended<IApplicationFile>, res: Response, next: NextFunction): Promise<void> {
    try {
      await applicationFileService.delete(req.file as IApplicationFile);

      res.status(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = await applicationFileService.getAll(req.query as IFileParams);

      res.json({
        data: files
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IFileRequestExtended<IApplicationFile>, res: Response, next: NextFunction): void {
    try {
      const file = req.file as IApplicationFile;

      res.json({
        data: file
      });

    } catch (error) {
      next(error);
    }
  }
}

export const applicationFileController = new ApplicationFileController();
