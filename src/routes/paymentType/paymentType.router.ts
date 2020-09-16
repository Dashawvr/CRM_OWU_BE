import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateTypeValid,
  checkIsPaymentTypeExists,
  checkIsUpdateTypeValid
} from '../../middlewares';
import {paymentTypeController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', paymentTypeController.getAll);
router.post('/', checkIsCreateTypeValid, paymentTypeController.create);

router.use('/:type_id', checkIsPaymentTypeExists);

router.get('/:type_id', paymentTypeController.getById);
router.patch('/:type_id', checkIsUpdateTypeValid, paymentTypeController.update);
router.delete('/:type_id', paymentTypeController.delete);

export const paymentTypeRouter = router;
