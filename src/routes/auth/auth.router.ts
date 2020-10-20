import {Router} from 'express';

import {
  checkAccessToken,
  checkIsPasswordCorrect,
  checkIsPasswordValid,
  checkIsUserRegistered,
  checkRefreshToken,
  checkResetToken
} from '../../middlewares';
import {authController} from '../../controllers';

const router = Router();

router.post('/', checkIsUserRegistered, checkIsPasswordCorrect, authController.loginUser);
router.post('/logout', checkAccessToken, authController.logoutUser);
router.post('/refresh', checkRefreshToken, authController.refreshToken);

router.post('/forgotPassword', checkIsUserRegistered, authController.forgotPassword);
router.post('/resetPassword/:reset_token', checkResetToken, checkIsPasswordValid, authController.resetPassword);

export const authRouter = router;
