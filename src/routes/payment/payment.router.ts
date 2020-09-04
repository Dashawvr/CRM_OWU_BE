import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreatePaymentValid,
  checkIsPaymentExists,
  checkIsUpdatePaymentValid
} from '../../middlewares';
import {paymentController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentController.getAll);
router.post('/', checkIsCreatePaymentValid, paymentController.create);

router.use('/:payment_id', checkIsPaymentExists);

router.get('/:payment_id', paymentController.getById);
router.patch('/:payment_id', checkIsUpdatePaymentValid, paymentController.update);
router.delete('/:payment_id', paymentController.delete);

export const paymentRouter = router;
