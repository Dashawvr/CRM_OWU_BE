import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IApplicationParams, IApplicationRequestExtended, IApplicationUpdateFields} from '../../interfaces';
import {IApplication} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {applicationFileService, applicationService} from '../../services';

class ApplicationController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = req.files as FileArray;

      const {id} = await applicationService.create(req.body as IApplication);

      if (files) {
        await applicationFileService.bulkCreate(id, files);
      }

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IApplicationRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const application = req.application as IApplication;

      await applicationService.update(application, req.body as IApplicationUpdateFields);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IApplicationRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.application as IApplication;

      await applicationService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const applications = await applicationService.getAll(req.query as IApplicationParams);

      res.json({
        data: applications
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IApplicationRequestExtended, res: Response, next: NextFunction): void {
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
