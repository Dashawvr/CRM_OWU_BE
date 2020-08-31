import {ITaskParams, ITaskResponse, ITaskUpdateFields} from '../../interfaces';
import {ITask, Task} from '../../database';
import {TaskOptionBuilder} from '../../helpers';

class TaskService {

  create(task: ITask): Promise<ITask> {
    return Task.create(task);
  }

  update(id: number, updateFields: ITaskUpdateFields): Promise<[number, ITask[]]> {
    return Task.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Task.destroy({
      where: {id}
    });
  }

  getAll(params: ITaskParams): Promise<ITaskResponse> {
    const {
      title,
      dateFrom,
      dateTo,
      important,
      description,
      user_id,
      status_id,
      client_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new TaskOptionBuilder()
      .title(title)
      .dateFrom(dateFrom)
      .dateTo(dateTo)
      .important(important)
      .description(description)
      .user_id(user_id)
      .status_id(status_id)
      .client_id(client_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Task.findAndCountAll(options);
  }

  getById(id: number): Promise<ITask | null> {
    return Task.findOne({
      where: {id}
    });
  }
}

export const taskService = new TaskService();
