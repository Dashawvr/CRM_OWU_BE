import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCourseExists,
  checkIsCreateCourseValid,
  checkIsUpdateCourseValid
} from '../../middlewares';
import {courseController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', courseController.getAll);
router.post('/', checkIsCreateCourseValid, courseController.create);

router.use('/:course_id', checkIsCourseExists);

router.get('/:course_id', courseController.getById);
router.patch('/:course_id', checkIsUpdateCourseValid, courseController.update);
router.delete('/:course_id', courseController.delete);

export const courseRouter = router;
