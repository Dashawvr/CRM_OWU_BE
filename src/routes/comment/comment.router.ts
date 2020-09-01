import {Router} from 'express';

import {
  checkAccessToken,
  checkCommentUpdateRule,
  checkIsCommentExists,
  checkIsCreateCommentValid,
  checkIsUpdateCommentValid
} from '../../middlewares';
import {commentController} from '../../controllers';

const router = Router();

router.use(checkAccessToken);

router.get('/', commentController.getAll);
router.post('/', checkIsCreateCommentValid, commentController.create);

router.use('/:comment_id', checkIsCommentExists);

router.get('/:comment_id', commentController.getById);
router.patch('/:comment_id', checkIsUpdateCommentValid, checkCommentUpdateRule, commentController.update);
router.delete('/:comment_id', commentController.delete);

export const commentRouter = router;
