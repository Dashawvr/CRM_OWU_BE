import {Router} from 'express';

import {
  authRouter,
  clientRouter,
  clientStatusRouter,
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
router.use('/clientStatuses', clientStatusRouter);

export const apiRouter = router;
