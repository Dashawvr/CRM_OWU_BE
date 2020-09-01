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

router.post('/', checkIsCreateClientValid, clientController.create);
router.patch('/:client_id', checkIsClientExists, checkIsUpdateClientValid, clientController.update);
router.delete('/:client_id', checkIsClientExists, clientController.delete);

router.get('/', clientController.getAll);
router.get('/:client_id', checkIsClientExists, clientController.getById);

export const clientRouter = router;
