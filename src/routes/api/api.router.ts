import {Router} from 'express';

import {
  applicationFileRouter,
  applicationRouter,
  authRouter,
  cityRouter,
  clientFileRouter,
  clientRouter,
  clientStatusRouter,
  commentRouter,
  courseRouter,
  discountRouter,
  groupRouter,
  paymentFileRouter,
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
router.use('/clientFiles', clientFileRouter);
router.use('/comments', commentRouter);
router.use('/cities', cityRouter);
router.use('/groups', groupRouter);
router.use('/courses', courseRouter);
router.use('/applications', applicationRouter);
router.use('/applicationFiles', applicationFileRouter);
router.use('/discounts', discountRouter);
router.use('/payments', paymentRouter);
router.use('/paymentStatuses', paymentStatusRouter);
router.use('/paymentTypes', paymentTypeRouter);
router.use('/paymentFiles', paymentFileRouter);
router.use('/sources', sourceRouter);

export const apiRouter = router;
