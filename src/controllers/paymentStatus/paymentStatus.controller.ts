import {NextFunction, Response} from 'express';

import {IPaymentStatusParams, IPaymentStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {IPaymentStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentStatusService} from '../../services';

class PaymentStatusController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const paymentStatus = req.body as IPaymentStatus;

      await paymentStatusService.create(paymentStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentStatus as IPaymentStatus;
      const updateFields = req.body as IPaymentStatusUpdateFields;

      await paymentStatusService.update(id, updateFields);

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
      const params = req.query as IPaymentStatusParams;

      const paymentStatuses = await paymentStatusService.getAll(params);

      res.json({
        data: paymentStatuses
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.paymentStatus as IPaymentStatus;

      const paymentStatus = await paymentStatusService.getById(id);

      res.json({
        data: paymentStatus
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentStatusController = new PaymentStatusController();
