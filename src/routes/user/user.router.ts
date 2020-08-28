import {Router} from 'express';

import {
  checkAccessToken,
  checkCreateRule,
  checkDeleteRule,
  checkIsCreateUserValid,
  checkIsSuperAdminOrAdmin,
  checkIsUpdateUserValid,
  checkIsUserExists,
  checkUpdateRule
} from '../../middlewares';
import {userController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);
router.use(checkIsSuperAdminOrAdmin);

router.post('/', checkIsCreateUserValid, checkCreateRule, userController.create);
router.patch('/:user_id', checkIsUserExists, checkIsUpdateUserValid, checkUpdateRule, userController.update);
router.delete('/:user_id', checkIsUserExists, checkDeleteRule, userController.delete);

router.get('/', userController.getAll);
router.get('/:user_id', checkIsUserExists, userController.getById);

export const userRouter = router;
