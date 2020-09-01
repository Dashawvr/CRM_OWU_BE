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

router.get('/', userController.getAll);
router.post('/', checkIsCreateUserValid, checkCreateRule, userController.create);

router.use('/:user_id', checkIsUserExists);

router.get('/:user_id', userController.getById);
router.patch('/:user_id', checkIsUpdateUserValid, checkUpdateRule, userController.update);
router.delete('/:user_id', checkDeleteRule, userController.delete);

export const userRouter = router;
