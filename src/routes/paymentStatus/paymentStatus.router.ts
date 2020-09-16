import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateStatusValid,
  checkIsPaymentStatusExists,
  checkIsUpdateStatusValid
} from '../../middlewares';
import {paymentStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentStatusController.getAll);
router.post('/', checkIsCreateStatusValid, paymentStatusController.create);

router.use('/:status_id', checkIsPaymentStatusExists);

router.get('/:status_id', paymentStatusController.getById);
router.patch('/:status_id', checkIsUpdateStatusValid, paymentStatusController.update);
router.delete('/:status_id', paymentStatusController.delete);

export const paymentStatusRouter = router;
