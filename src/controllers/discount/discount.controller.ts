import {NextFunction, Request, Response} from 'express';

import {IDiscountParams, IDiscountRequestExtended, IDiscountUpdateFields} from '../../interfaces';
import {IDiscount} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {discountService} from '../../services';

class DiscountController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await discountService.create(req.body as IDiscount);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IDiscountRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.discount as IDiscount;

      await discountService.update(id, req.body as IDiscountUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IDiscountRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.discount as IDiscount;

      await discountService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const discounts = await discountService.getAll(req.query as IDiscountParams);

      res.json({
        data: discounts
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IDiscountRequestExtended, res: Response, next: NextFunction): void {
    try {
      const discount = req.discount as IDiscount;

      res.json({
        data: discount
      });

    } catch (error) {
      next(error);
    }
  }
}

export const discountController = new DiscountController();
