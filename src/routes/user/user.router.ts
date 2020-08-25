import {Router} from 'express';

import {
  checkAccessToken,
  checkIsAdmin,
  checkIsCreateUserValid,
  checkIsSuperAdmin,
  checkIsUpdateUserValid,
  checkIsUserExists
} from '../../middlewares';
import {userController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.post('/', checkIsSuperAdmin, checkIsCreateUserValid, userController.create); //TODO create rules
router.patch('/:user_id', checkIsSuperAdmin, checkIsUserExists, checkIsUpdateUserValid, userController.update);
router.delete('/:user_id', checkIsSuperAdmin, checkIsUserExists, userController.delete);

router.use(checkIsAdmin);
router.get('/', userController.getAll); //TODO with params
router.get('/:user_id', checkIsUserExists, userController.getById);

export const userRouter = router;
