import {NextFunction, Response} from 'express';

import {IPaymentStatusParams, IPaymentStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {IPaymentStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentStatusService} from '../../services';

class PaymentStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentStatusService.create(req.body as IPaymentStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentStatus as IPaymentStatus;

      await paymentStatusService.update(id, req.body as IPaymentStatusUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentStatus as IPaymentStatus;

      await paymentStatusService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const paymentStatuses = await paymentStatusService.getAll(req.query as IPaymentStatusParams);

      res.json({
        data: paymentStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const paymentStatus = req.paymentStatus as IPaymentStatus;

      res.json({
        data: paymentStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentStatusController = new PaymentStatusController();
