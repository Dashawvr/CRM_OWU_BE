import {NextFunction, Request, Response} from 'express';

import {IPaymentParams, IPaymentRequestExtended, IPaymentUpdateFields} from '../../interfaces';
import {IPayment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentService} from '../../services';

class PaymentController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentService.create(req.body as IPayment);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IPaymentRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.payment as IPayment;

      await paymentService.update(id, req.body as IPaymentUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IPaymentRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.payment as IPayment;

      await paymentService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const payments = await paymentService.getAll(req.query as IPaymentParams);

      res.json({
        data: payments
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IPaymentRequestExtended, res: Response, next: NextFunction): void {
    try {
      const payment = req.payment as IPayment;

      res.json({
        data: payment
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentController = new PaymentController();
