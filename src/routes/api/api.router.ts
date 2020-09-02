import {Router} from 'express';

import {
  authRouter,
  cityRouter,
  clientRouter,
  clientStatusRouter,
  commentRouter,
  groupRouter,
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
router.use('/comments', commentRouter);
router.use('/cities', cityRouter);
router.use('/groups', groupRouter);

export const apiRouter = router;
