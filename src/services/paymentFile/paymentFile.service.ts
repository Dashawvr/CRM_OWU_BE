import {FileArray} from 'express-fileupload';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  rmdirSync,
  unlinkSync
} from 'fs';
import {join} from 'path';
import {v1} from 'uuid';

import {IFileParams, IFileResponse} from '../../interfaces';
import {filesMv, PaymentFileOptionBuilder} from '../../helpers';
import {IPayment, IPaymentFile, PaymentFile} from '../../database';
import {paymentTemplate} from '../../templates';
import {sequelize} from '../../configs';

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

  async generateExcelFile(payment: IPayment): Promise<void> {
    const transaction = await sequelize.transaction();
    try {
      const fileName = `${v1()}.xlsx`;
      const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

      const filePath = `payment/${payment.id}/documents/${fileName}`;
      const folderPath = join(process.cwd(), 'static', 'payment', `${payment.id}`, 'documents');

      const workbook = paymentTemplate.excel(payment);

      await PaymentFile.create({
        path: filePath,
        name: fileName,
        document_type: mimeType,
        payment_id: payment.id
      }, {transaction});

      await transaction.commit();

      if (!existsSync(folderPath)) {
        mkdirSync(folderPath, {recursive: true});
      }

      await workbook.xlsx.writeFile(join(process.cwd(), 'static', filePath));

    } catch (error) {
      await transaction.rollback();
    }

  }
}

export const paymentFileService = new PaymentFileService();
