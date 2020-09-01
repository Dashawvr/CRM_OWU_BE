import {ICommentParams, ICommentResponse, ICommentUpdateFields} from '../../interfaces';
import {Comment, IComment} from '../../database';
import {CommentOptionBuilder} from '../../helpers';

class CommentService {

  create(comment: IComment): Promise<IComment> {
    return Comment.create(comment);
  }

  update(id: number, updateFields: ICommentUpdateFields): Promise<[number, IComment[]]> {
    return Comment.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Comment.destroy({
      where: {id}
    });
  }

  getAll(params: ICommentParams): Promise<ICommentResponse> {
    const {
      text,
      user_id,
      client_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new CommentOptionBuilder()
      .text(text)
      .user_id(user_id)
      .client_id(client_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Comment.findAndCountAll(options);
  }

  getById(id: number): Promise<IComment | null> {
    return Comment.findOne({
      where: {id}
    });
  }
}

export const commentService = new CommentService();
