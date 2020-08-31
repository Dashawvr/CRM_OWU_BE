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

router.post('/', checkIsCreateTaskStatusValid, taskStatusController.create);
router.patch('/:status_id', checkIsTaskStatusExists, checkIsUpdateTaskStatusValid, taskStatusController.update);
router.delete('/:status_id', checkIsTaskStatusExists, taskStatusController.delete);

router.get('/', taskStatusController.getAll);
router.get('/:status_id', checkIsTaskStatusExists, taskStatusController.getById);

export const taskStatusRouter = router;
