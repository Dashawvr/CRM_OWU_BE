import {NextFunction, Response} from 'express';

import {IApplicationParams, IApplicationUpdateFields, IRequestExtended} from '../../interfaces';
import {IApplication} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {applicationService} from '../../services';

class ApplicationController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const application = req.body as IApplication;

      await applicationService.create(application);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.application as IApplication;
      const updateFields = req.body as IApplicationUpdateFields;

      await applicationService.update(id, updateFields);

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
      const params = req.query as IApplicationParams;

      const applications = await applicationService.getAll(params);

      res.json({
        data: applications
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.application as IApplication;

      const application = await applicationService.getById(id);

      res.json({
        data: application
      });

    } catch (error) {
      next(error);
    }
  }
}

export const applicationController = new ApplicationController();
