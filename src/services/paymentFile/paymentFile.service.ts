import {FileArray} from 'express-fileupload';
import {readdirSync, rmdirSync, unlinkSync} from 'fs';
import {join} from 'path';
import {v1} from 'uuid';

import {IFileParams, IFileResponse} from '../../interfaces';
import {filesMv, PaymentFileOptionBuilder} from '../../helpers';
import {IPaymentFile, PaymentFile} from '../../database';

class PaymentFileService {

  async bulkCreate(payment_id: number, {files}: FileArray): Promise<IPaymentFile[]> {
    const filesToSave: IPaymentFile[] = [];
    const path = `payment/${payment_id}/documents`;

    const data = Array.isArray(files) ? files : [files];

    data.forEach(file => {
      const extension = file.name.split('.').pop();
      const generatedName = `${v1()}.${extension}`;

      filesToSave.push({
        document_type: file.mimetype,
        name: file.name,
        path: `${path}/${generatedName}`,
        payment_id
      });

      file.name = generatedName;
    });

    const savedFiles = await PaymentFile.bulkCreate(filesToSave);

    if (savedFiles) {
      await filesMv(join(process.cwd(), 'static', path), files);
    }

    return savedFiles;
  }

  async delete({id, path, payment_id}: IPaymentFile): Promise<number> {

    const countOfDeletedFiles = await PaymentFile.destroy({
      where: {id}
    });

    if (countOfDeletedFiles) {
      unlinkSync(join(process.cwd(), 'static', path));
    }

    const files = readdirSync(join(process.cwd(), 'static', 'payment', `${payment_id}`, 'documents'));

    if (!files.length) {
      rmdirSync(join(process.cwd(), 'static', 'payment', `${payment_id}`), {recursive: true});
    }

    return countOfDeletedFiles;
  }

  getAll(params: IFileParams): Promise<IFileResponse<IPaymentFile>> {
    const {
      name,
      path,
      document_type,
      payment_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new PaymentFileOptionBuilder()
      .name(name)
      .path(path)
      .document_type(document_type)
      .payment_id(payment_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return PaymentFile.findAndCountAll(options);
  }

  getById(id: number): Promise<IPaymentFile | null> {
    return PaymentFile.findOne({
      where: {id}
    });
  }
}

export const paymentFileService = new PaymentFileService();
