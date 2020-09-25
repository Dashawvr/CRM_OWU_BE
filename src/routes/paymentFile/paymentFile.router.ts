import {Router} from 'express';

import {
  checkAccessToken,
  checkIsFilesValid,
  checkIsPaymentExists,
  checkIsPaymentFileExists
} from '../../middlewares';
import {paymentFileController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentFileController.getAll);
router.post('/', checkIsPaymentExists, checkIsFilesValid, paymentFileController.create);

router.use('/:file_id', checkIsPaymentFileExists);

router.get('/:file_id', paymentFileController.getById);
router.delete('/:file_id', paymentFileController.delete);

export const paymentFileRouter = router;
