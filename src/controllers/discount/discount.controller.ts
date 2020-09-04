import {NextFunction, Response} from 'express';

import {IDiscountParams, IDiscountUpdateFields, IRequestExtended} from '../../interfaces';
import {IDiscount} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {discountService} from '../../services';

class DiscountController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const discount = req.body as IDiscount;

      await discountService.create(discount);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.discount as IDiscount;
      const updateFields = req.body as IDiscountUpdateFields;

      await discountService.update(id, updateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.discount as IDiscount;

      await discountService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.query as IDiscountParams;

      const discounts = await discountService.getAll(params);

      res.json({
        data: discounts
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.discount as IDiscount;

      const discount = await discountService.getById(id);

      res.json({
        data: discount
      });

    } catch (error) {
      next(error);
    }
  }
}

export const discountController = new DiscountController();
