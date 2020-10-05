import {Router} from 'express';

import {
  checkAccessToken,
  checkIsApplicationExists,
  checkIsApplicationFileExists,
  checkIsFilesValid
} from '../../middlewares';
import {applicationFileController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', applicationFileController.getAll);
router.post('/', checkIsApplicationExists, checkIsFilesValid, applicationFileController.create);

router.get('/:application_id/pdf', checkIsApplicationExists, applicationFileController.createPDF);

router.use('/:file_id', checkIsApplicationFileExists);

router.get('/:file_id', applicationFileController.getById);
router.delete('/:file_id', applicationFileController.delete);

export const applicationFileRouter = router;
