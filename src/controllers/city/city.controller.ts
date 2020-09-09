import {NextFunction, Response} from 'express';

import {ICityParams, ICityUpdateFields, IRequestExtended} from '../../interfaces';
import {ICity} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {cityService} from '../../services';

class CityController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await cityService.create(req.body as ICity);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;

      await cityService.update(id, req.body as ICityUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;

      await cityService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const cities = await cityService.getAll(req.query as ICityParams);

      res.json({
        data: cities
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
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
