import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCreateTaskValid,
  checkIsTaskExists,
  checkIsTaskStatusExists,
  checkIsUpdateTaskValid,
  checkIsUserExists
} from '../../middlewares';
import {taskController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', taskController.getAll);
router.post('/',
  checkIsCreateTaskValid,
  checkIsTaskStatusExists,
  checkIsUserExists,
  taskController.create);

router.use('/:task_id', checkIsTaskExists);

router.get('/:task_id', taskController.getById);
router.patch('/:task_id', checkIsUpdateTaskValid, taskController.update);
router.delete('/:task_id', taskController.delete);

export const taskRouter = router;
