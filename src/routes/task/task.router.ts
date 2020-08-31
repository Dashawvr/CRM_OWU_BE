import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateTaskValid,
  checkIsTaskExists,
  checkIsUpdateTaskValid
} from '../../middlewares';
import {taskController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.post('/', checkIsCreateTaskValid, taskController.create);
router.patch('/:task_id', checkIsTaskExists, checkIsUpdateTaskValid, taskController.update);
router.delete('/:task_id', checkIsTaskExists, taskController.delete);

router.get('/', taskController.getAll);
router.get('/:task_id', checkIsTaskExists, taskController.getById);

export const taskRouter = router;
