import {Router} from 'express';

import {
  applicationRouter,
  authRouter,
  cityRouter,
  clientRouter,
  clientStatusRouter,
  commentRouter,
  courseRouter,
  discountRouter,
  groupRouter,
  paymentRouter,
  paymentStatusRouter,
  paymentTypeRouter,
  sourceRouter,
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
router.use('/courses', courseRouter);
router.use('/applications', applicationRouter);
router.use('/discounts', discountRouter);
router.use('/payments', paymentRouter);
router.use('/paymentStatuses', paymentStatusRouter);
router.use('/paymentTypes', paymentTypeRouter);
router.use('/sources', sourceRouter);

export const apiRouter = router;
