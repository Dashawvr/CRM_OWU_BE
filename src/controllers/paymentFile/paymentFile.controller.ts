import {NextFunction, Request, Response} from 'express';
import {FileArray} from 'express-fileupload';

import {IFileParams, IFileRequestExtended} from '../../interfaces';
import {IPaymentFile} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {paymentFileService} from '../../services';

class PaymentFileController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {payment_id} = req.body;
      const files = req.files as FileArray;

      if (files) {
        await paymentFileService.bulkCreate(+payment_id, files);
      }

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IFileRequestExtended<IPaymentFile>, res: Response, next: NextFunction): Promise<void> {
    try {
      await paymentFileService.delete(req.file as IPaymentFile);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const files = await paymentFileService.getAll(req.query as IFileParams);

      res.json({
        data: files
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IFileRequestExtended<IPaymentFile>, res: Response, next: NextFunction): void {
    try {
      const file = req.file as IPaymentFile;

      res.json({
        data: file
      });

    } catch (error) {
      next(error);
    }
  }
}

export const paymentFileController = new PaymentFileController();
