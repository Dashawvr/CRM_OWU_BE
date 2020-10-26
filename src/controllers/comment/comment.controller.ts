import {NextFunction, Request, Response} from 'express';

import {ICommentParams, ICommentRequestExtended, ICommentUpdateFields} from '../../interfaces';
import {IComment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {commentService} from '../../services';

class CommentController {

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await commentService.create(req.body as IComment);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: ICommentRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;

      await commentService.update(id, req.body as ICommentUpdateFields);

      res.status(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async delete(req: ICommentRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;

      await commentService.delete(id);

      res.status(ResponseStatusCodes.NO_CONTENT);

    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const comments = await commentService.getAll(req.query as ICommentParams);

      res.json({
        data: comments
      });

    } catch (error) {
      next(error);
    }
  }

  getById(req: ICommentRequestExtended, res: Response, next: NextFunction): void {
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
