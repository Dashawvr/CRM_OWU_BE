import {Router} from 'express';

import {
  authRouter,
  clientRouter,
  taskRouter,
  taskStatusRouter,
  userRouter
} from '../../routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/tasks', taskRouter);
router.use('/taskStatuses', taskStatusRouter);
router.use('/clients', clientRouter);

export const apiRouter = router;
