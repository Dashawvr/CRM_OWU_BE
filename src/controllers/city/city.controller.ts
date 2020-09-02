import {NextFunction, Response} from 'express';

import {ICityParams, ICityUpdateFields, IRequestExtended} from '../../interfaces';
import {ICity} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {cityService} from '../../services';

class CityController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const city = req.body as ICity;

      await cityService.create(city);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;
      const updateFields = req.body as ICityUpdateFields;

      await cityService.update(id, updateFields);

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
      const params = req.query as ICityParams;

      const cities = await cityService.getAll(params);

      res.json({
        data: cities
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.city as ICity;

      const city = await cityService.getById(id);

      res.json({
        data: city
      });

    } catch (error) {
      next(error);
    }
  }
}

export const cityController = new CityController();
