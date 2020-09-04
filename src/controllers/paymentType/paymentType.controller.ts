import {NextFunction, Response} from 'express';

import {IPaymentTypeParams, IPaymentTypeUpdateFields, IRequestExtended} from '../../interfaces';
import {IPaymentType} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentTypeService} from '../../services';

class PaymentTypeController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const paymentType = req.body as IPaymentType;

      await paymentTypeService.create(paymentType);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentType as IPaymentType;
      const updateFields = req.body as IPaymentTypeUpdateFields;

      await paymentTypeService.update(id, updateFields);

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
      const params = req.query as IPaymentTypeParams;

      const paymentTypes = await paymentTypeService.getAll(params);

      res.json({
        data: paymentTypes
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentType as IPaymentType;

      const paymentType = await paymentTypeService.getById(id);

      res.json({
        data: paymentType
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentTypeController = new PaymentTypeController();
