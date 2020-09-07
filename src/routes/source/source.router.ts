import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateSourceValid,
  checkIsSourceExists,
  checkIsUpdateSourceValid
} from '../../middlewares';
import {sourceController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', sourceController.getAll);
router.post('/', checkIsCreateSourceValid, sourceController.create);

router.use('/:source_id', checkIsSourceExists);

router.get('/:source_id', sourceController.getById);
router.patch('/:source_id', checkIsUpdateSourceValid, sourceController.update);
router.delete('/:source_id', sourceController.delete);

export const sourceRouter = router;
