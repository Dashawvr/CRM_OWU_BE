import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreatePaymentStatusValid,
  checkIsPaymentStatusExists,
  checkIsUpdatePaymentStatusValid
} from '../../middlewares';
import {paymentStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentStatusController.getAll);
router.post('/', checkIsCreatePaymentStatusValid, paymentStatusController.create);

router.use('/:status_id', checkIsPaymentStatusExists);

router.get('/:status_id', paymentStatusController.getById);
router.patch('/:status_id', checkIsUpdatePaymentStatusValid, paymentStatusController.update);
router.delete('/:status_id', paymentStatusController.delete);

export const paymentStatusRouter = router;
