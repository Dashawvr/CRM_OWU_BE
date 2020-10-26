import {NextFunction, Request, Response} from 'express';

import {ICityParams, ICityRequestExtended, ICityUpdateFields} from '../../interfaces';
import {ICity} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {cityService} from '../../services';

class CityController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await cityService.create(req.body as ICity);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async update(req: ICityRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;

      await cityService.update(id, req.body as ICityUpdateFields);

      res.status(ResponseStatusCodes.CREATED).end();

    } catch (error) {
      next(error);
    }
  }

  async delete(req: ICityRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;

      await cityService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT).end();

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cities = await cityService.getAll(req.query as ICityParams);

      res.json({
        data: cities
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: ICityRequestExtended, res: Response, next: NextFunction): void {
    try {
      const city = req.city as ICity;

      res.json({
        data: city
      });

    } catch (error) {
      next(error);
    }
  }
}

export const cityController = new CityController();
