import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateGroupValid,
  checkIsGroupExists,
  checkIsUpdateGroupValid
} from '../../middlewares';
import {groupController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', groupController.getAll);
router.post('/', checkIsCreateGroupValid, groupController.create);

router.use('/:group_id', checkIsGroupExists);

router.get('/:group_id', groupController.getById);
router.patch('/:group_id', checkIsUpdateGroupValid, groupController.update);
router.delete('/:group_id', groupController.delete);

export const groupRouter = router;
