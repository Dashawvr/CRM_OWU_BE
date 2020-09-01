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

router.post('/', checkIsCreateCommentValid, commentController.create);
router.patch('/:comment_id', checkIsCommentExists, checkIsUpdateCommentValid, checkCommentUpdateRule, commentController.update);
router.delete('/:comment_id', checkIsCommentExists, commentController.delete);

router.get('/', commentController.getAll);
router.get('/:comment_id', checkIsCommentExists, commentController.getById);

export const commentRouter = router;
