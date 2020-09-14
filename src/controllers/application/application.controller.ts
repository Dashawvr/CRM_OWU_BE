import {NextFunction, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IApplicationParams, IApplicationUpdateFields, IRequestExtended} from '../../interfaces';
import {IApplication} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {applicationFileService, applicationService} from '../../services';

class ApplicationController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = req.files as FileArray;

      const {id} = await applicationService.create(req.body as IApplication);

      if (files) {
        await applicationFileService.bulkCreate(id, files);
      }

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.application as IApplication;

      await applicationService.update(id, req.body as IApplicationUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.application as IApplication;

      await applicationService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const applications = await applicationService.getAll(req.query as IApplicationParams);

      res.json({
        data: applications
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const application = req.application as IApplication;

      res.json({
        data: application
      });

    } catch (error) {
      next(error);
    }
  }
}

export const applicationController = new ApplicationController();
