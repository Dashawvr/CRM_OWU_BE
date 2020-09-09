import {NextFunction, Response} from 'express';

import {ICommentParams, ICommentUpdateFields, IRequestExtended} from '../../interfaces';
import {IComment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {commentService} from '../../services';

class CommentController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      await commentService.create(req.body as IComment);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;

      await commentService.update(id, req.body as ICommentUpdateFields);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;

      await commentService.delete(id);

      res.sendStatus(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const comments = await commentService.getAll(req.query as ICommentParams);

      res.json({
        data: comments
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: IRequestExtended, res: Response, next: NextFunction): void {
    try {
      const comment = req.comment as IComment;

      res.json({
        data: comment
      });

    } catch (error) {
      next(error);
    }
  }
}

export const commentController = new CommentController();
