import {Router} from 'express';

import {
  checkAccessToken,
  checkIsClientExists,
  checkIsClientFileExists,
  checkIsFilesValid
} from '../../middlewares';
import {clientFileController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', clientFileController.getAll);
router.post('/', checkIsClientExists, checkIsFilesValid, clientFileController.create);

router.use('/:file_id', checkIsClientFileExists);

router.get('/:file_id', clientFileController.getById);
router.delete('/:file_id', clientFileController.delete);

export const clientFileRouter = router;
