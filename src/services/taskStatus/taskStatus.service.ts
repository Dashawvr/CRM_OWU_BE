import {
  IStatusParams,
  IStatusResponse,
  IStatusUpdateFields
} from '../../interfaces';
import {ITaskStatus, TaskStatus} from '../../database';
import {TaskStatusOptionBuilder} from '../../helpers';

class TaskStatusService {

  create(taskStatus: ITaskStatus): Promise<ITaskStatus> {
    return TaskStatus.create(taskStatus);
  }

  update(id: number, updateFields: IStatusUpdateFields): Promise<[number, ITaskStatus[]]> {
    return TaskStatus.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return TaskStatus.destroy({
      where: {id}
    });
  }

  getAll(params: IStatusParams): Promise<IStatusResponse<ITaskStatus>> {
    const {
      name,
      color,
      description,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new TaskStatusOptionBuilder()
      .name(name)
      .color(color)
      .description(description)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return TaskStatus.findAndCountAll(options);
  }

  getById(id: number): Promise<ITaskStatus | null> {
    return TaskStatus.findOne({
      where: {id}
    });
  }
}

export const taskStatusService = new TaskStatusService();
