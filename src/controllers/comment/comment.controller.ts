import {NextFunction, Response} from 'express';

import {ICommentParams, ICommentUpdateFields, IRequestExtended} from '../../interfaces';
import {IComment} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {commentService} from '../../services';

class CommentController {

  async create(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const comment = req.body as IComment;

      await commentService.create(comment);

      res.sendStatus(ResponseStatusCodes.CREATED);

    } catch (error) {
      next(error);
    }
  }

  async update(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;
      const updateFields = req.body as ICommentUpdateFields;

      await commentService.update(id, updateFields);

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
      const params = req.query as ICommentParams;

      const comments = await commentService.getAll(params);

      res.json({
        data: comments
      });

    } catch (error) {
      next(error);
    }
  }

  async getById(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
    try {
      const {id} = req.comment as IComment;

      const comment = await commentService.getById(id);

      res.json({
        data: comment
      });

    } catch (error) {
      next(error);
    }
  }
}

export const commentController = new CommentController();
