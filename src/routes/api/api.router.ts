import {Router} from 'express';

import {
  authRouter,
  taskRouter,
  userRouter
} from '../../routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/tasks', taskRouter);

export const apiRouter = router;
