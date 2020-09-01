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

router.get('/', clientStatusController.getAll);
router.post('/', checkIsCreateClientStatusValid, clientStatusController.create);

router.use('/:status_id', checkIsClientStatusExists);

router.get('/:status_id', clientStatusController.getById);
router.patch('/:status_id', checkIsUpdateClientStatusValid, clientStatusController.update);
router.delete('/:status_id', clientStatusController.delete);

export const clientStatusRouter = router;
