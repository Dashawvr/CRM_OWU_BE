import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreatePaymentTypeValid,
  checkIsPaymentTypeExists,
  checkIsUpdatePaymentTypeValid
} from '../../middlewares';
import {paymentTypeController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentTypeController.getAll);
router.post('/', checkIsCreatePaymentTypeValid, paymentTypeController.create);

router.use('/:type_id', checkIsPaymentTypeExists);

router.get('/:type_id', paymentTypeController.getById);
router.patch('/:type_id', checkIsUpdatePaymentTypeValid, paymentTypeController.update);
router.delete('/:type_id', paymentTypeController.delete);

export const paymentTypeRouter = router;
