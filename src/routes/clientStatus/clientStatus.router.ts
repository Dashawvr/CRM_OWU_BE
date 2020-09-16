import {Router} from 'express';

import {
  checkAccessToken,
  checkIsClientStatusExists,
  checkIsCreateStatusValid,
  checkIsUpdateStatusValid
} from '../../middlewares';
import {clientStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', clientStatusController.getAll);
router.post('/', checkIsCreateStatusValid, clientStatusController.create);

router.use('/:status_id', checkIsClientStatusExists);

router.get('/:status_id', clientStatusController.getById);
router.patch('/:status_id', checkIsUpdateStatusValid, clientStatusController.update);
router.delete('/:status_id', clientStatusController.delete);

export const clientStatusRouter = router;
