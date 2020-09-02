import {Router} from 'express';

import {
  checkAccessToken,
  checkIsCityExists,
  checkIsCreateCityValid,
  checkIsUpdateCityValid
} from '../../middlewares';
import {cityController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', cityController.getAll);
router.post('/', checkIsCreateCityValid, cityController.create);

router.use('/:city_id', checkIsCityExists);

router.get('/:city_id', cityController.getById);
router.patch('/:city_id', checkIsUpdateCityValid, cityController.update);
router.delete('/:city_id', cityController.delete);

export const cityRouter = router;
