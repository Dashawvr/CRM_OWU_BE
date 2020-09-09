import {NextFunction, Response} from 'express';

import {IPaymentTypeParams, IPaymentTypeUpdateFields, IRequestExtended} from '../../interfaces';
import {IPaymentType} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentTypeService} from '../../services';

class PaymentTypeController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentTypeService.create(req.body as IPaymentType);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentType as IPaymentType;

      await paymentTypeService.update(id, req.body as IPaymentTypeUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentType as IPaymentType;

      await paymentTypeService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const paymentTypes = await paymentTypeService.getAll(req.query as IPaymentTypeParams);

      res.json({
        data: paymentTypes
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const paymentType = req.paymentType as IPaymentType;

      res.json({
        data: paymentType
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentTypeController = new PaymentTypeController();
