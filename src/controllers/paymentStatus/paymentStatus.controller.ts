import {NextFunction, Request, Response} from 'express';

import {IStatusParams, IStatusRequestExtended, IStatusUpdateFields} from '../../interfaces';
import {IPaymentStatus} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentStatusService} from '../../services';

class PaymentStatusController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentStatusService.create(req.body as IPaymentStatus);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IStatusRequestExtended<IPaymentStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as IPaymentStatus;

      await paymentStatusService.update(id, req.body as IStatusUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IStatusRequestExtended<IPaymentStatus>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.status as IPaymentStatus;

      await paymentStatusService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const statuses = await paymentStatusService.getAll(req.query as IStatusParams);

      res.json({
        data: statuses
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IStatusRequestExtended<IPaymentStatus>, res: Response, next: NextFunction): void {
    try {
      const status = req.status as IPaymentStatus;

      res.json({
        data: status
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentStatusController = new PaymentStatusController();
