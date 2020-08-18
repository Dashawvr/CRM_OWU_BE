import {Router} from 'express';

import { authController } from '../../controllers';

import {
  checkAccessToken,
  checkIsPasswordCorrect,
  checkIsUserRegistered,
  checkRefreshToken
} from '../../middlewares';

const router = Router();

router.post('/', checkIsUserRegistered, checkIsPasswordCorrect, authController.loginUser);
router.post('/logout', checkAccessToken, authController.logoutUser);
router.post('/refresh', checkRefreshToken, authController.refreshToken);

export const authRouter = router;
