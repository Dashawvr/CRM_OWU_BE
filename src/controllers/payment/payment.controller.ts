import {NextFunction, Response} from 'express';

import {IPaymentParams, IPaymentUpdateFields, IRequestExtended} from '../../interfaces';
import {IPayment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentService} from '../../services';

class PaymentController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const payment = req.body as IPayment;

      await paymentService.create(payment);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.payment as IPayment;
      const updateFields = req.body as IPaymentUpdateFields;

      await paymentService.update(id, updateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.payment as IPayment;

      await paymentService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const params = req.query as IPaymentParams;

      const payments = await paymentService.getAll(params);

      res.json({
        data: payments
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.payment as IPayment;

      const payment = await paymentService.getById(id);

      res.json({
        data: payment
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentController = new PaymentController();
