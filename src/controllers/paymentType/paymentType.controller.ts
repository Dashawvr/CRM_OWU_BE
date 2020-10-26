import {NextFunction, Request, Response} from 'express';

import {ITypeParams, ITypeRequestExtended, ITypeUpdateFields} from '../../interfaces';
import {IPaymentType} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentTypeService} from '../../services';

class PaymentTypeController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentTypeService.create(req.body as IPaymentType);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: ITypeRequestExtended<IPaymentType>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.type as IPaymentType;

      await paymentTypeService.update(id, req.body as ITypeUpdateFields);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: ITypeRequestExtended<IPaymentType>, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.type as IPaymentType;

      await paymentTypeService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const types = await paymentTypeService.getAll(req.query as ITypeParams);

      res.json({
        data: types
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: ITypeRequestExtended<IPaymentType>, res: Response, next: NextFunction): void {
    try {
      const type = req.type as IPaymentType;

      res.json({
        data: type
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentTypeController = new PaymentTypeController();
