import {Router} from 'express';

import {
  checkAccessToken,
  checkIsClientExists,
  checkIsCreateClientValid,
  checkIsUpdateClientValid
} from '../../middlewares';
import {clientController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', clientController.getAll);
router.post('/', checkIsCreateClientValid, clientController.create);

router.use('/:client_id', checkIsClientExists);

router.get('/:client_id', clientController.getById);
router.patch('/:client_id', checkIsUpdateClientValid, clientController.update);
router.delete('/:client_id', clientController.delete);

export const clientRouter = router;
