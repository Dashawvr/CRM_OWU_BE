import {Router} from 'express';

import {
  checkAccessToken,
  checkIsApplicationExists,
  checkIsApplicationFileExists,
  checkIsApplicationFilesValid
} from '../../middlewares';
import {applicationFileController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', applicationFileController.getAll);
router.post('/', checkIsApplicationExists, checkIsApplicationFilesValid, applicationFileController.create);

router.use('/:file_id', checkIsApplicationFileExists);

router.get('/:file_id', applicationFileController.getById);
router.delete('/:file_id', applicationFileController.delete);

export const applicationFileRouter = router;
