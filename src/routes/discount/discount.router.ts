import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateDiscountValid,
  checkIsDiscountExists,
  checkIsUpdateDiscountValid
} from '../../middlewares';
import {discountController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', discountController.getAll);
router.post('/', checkIsCreateDiscountValid, discountController.create);

router.use('/:discount_id', checkIsDiscountExists);

router.get('/:discount_id', discountController.getById);
router.patch('/:discount_id', checkIsUpdateDiscountValid, discountController.update);
router.delete('/:discount_id', discountController.delete);

export const discountRouter = router;
