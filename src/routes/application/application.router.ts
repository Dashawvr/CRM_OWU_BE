import {Router} from 'express';

import {
  checkAccessToken,
  checkIsApplicationExists,
  checkIsCityExists,
  checkIsClientExists,
  checkIsCourseExists,
  checkIsCreateApplicationValid,
  checkIsFilesValid,
  checkIsUpdateApplicationValid
} from '../../middlewares';
import {applicationController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', applicationController.getAll);
router.post('/',
  checkIsCreateApplicationValid,
  checkIsFilesValid,
  checkIsClientExists,
  checkIsCityExists,
  checkIsCourseExists,
  applicationController.create
)
;

router.use('/:application_id', checkIsApplicationExists);

router.get('/:application_id', applicationController.getById);
router.patch('/:application_id', checkIsUpdateApplicationValid, applicationController.update);
router.delete('/:application_id', applicationController.delete);

export const applicationRouter = router;
