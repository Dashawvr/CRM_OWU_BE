import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateStatusValid,
  checkIsTaskStatusExists,
  checkIsUpdateStatusValid
} from '../../middlewares';
import {taskStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', taskStatusController.getAll);
router.post('/', checkIsCreateStatusValid, taskStatusController.create);

router.use('/:status_id', checkIsTaskStatusExists);

router.get('/:status_id', taskStatusController.getById);
router.patch('/:status_id', checkIsUpdateStatusValid, taskStatusController.update);
router.delete('/:status_id', taskStatusController.delete);

export const taskStatusRouter = router;
