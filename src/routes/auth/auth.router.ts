import {Router} from 'express';

import {
  checkAccessToken,
  checkIsPasswordCorrect,
  checkIsUserRegistered,
  checkRefreshToken
} from '../../middlewares';
import {authController} from '../../controllers';

const router = Router();

router.post('/', checkIsUserRegistered, checkIsPasswordCorrect, authController.loginUser);
router.post('/logout', checkAccessToken, authController.logoutUser);
router.post('/refresh', checkRefreshToken, authController.refreshToken);

export const authRouter = router;
