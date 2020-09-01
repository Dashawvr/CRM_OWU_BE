import {Router} from 'express';

import {
  checkAccessToken,
  checkIsClientStatusExists,
  checkIsCreateClientStatusValid,
  checkIsUpdateClientStatusValid
} from '../../middlewares';
import {clientStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.post('/', checkIsCreateClientStatusValid, clientStatusController.create);
router.patch('/:status_id', checkIsClientStatusExists, checkIsUpdateClientStatusValid, clientStatusController.update);
router.delete('/:status_id', checkIsClientStatusExists, clientStatusController.delete);

router.get('/', clientStatusController.getAll);
router.get('/:status_id', checkIsClientStatusExists, clientStatusController.getById);

export const clientStatusRouter = router;
