import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateTaskStatusValid,
  checkIsTaskStatusExists,
  checkIsUpdateTaskStatusValid
} from '../../middlewares';
import {taskStatusController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', taskStatusController.getAll);
router.post('/', checkIsCreateTaskStatusValid, taskStatusController.create);

router.use('/:status_id', checkIsTaskStatusExists);

router.get('/:status_id', taskStatusController.getById);
router.patch('/:status_id', checkIsUpdateTaskStatusValid, taskStatusController.update);
router.delete('/:status_id', taskStatusController.delete);

export const taskStatusRouter = router;
