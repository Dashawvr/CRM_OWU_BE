import {IGroupParams, IGroupResponse, IGroupUpdateFields} from '../../interfaces';
import {Group, IGroup} from '../../database';
import {GroupOptionBuilder} from '../../helpers';

class GroupService {

  create(group: IGroup): Promise<IGroup> {
    return Group.create(group);
  }

  update(id: number, updateFields: IGroupUpdateFields): Promise<[number, IGroup[]]> {
    return Group.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Group.destroy({
      where: {id}
    });
  }

  getAll(params: IGroupParams): Promise<IGroupResponse> {
    const {
      name,
      practiceFrom,
      practiceTo,
      startDateFrom,
      startDateTo,
      endDateFrom,
      endDateTo,
      startTimeFrom,
      startTimeTo,
      course_id,
      city_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new GroupOptionBuilder()
      .name(name)
      .practiceFrom(practiceFrom)
      .practiceTo(practiceTo)
      .startDateFrom(startDateFrom)
      .startDateTo(startDateTo)
      .endDateFrom(endDateFrom)
      .endDateTo(endDateTo)
      .startTimeFrom(startTimeFrom)
      .startTimeTo(startTimeTo)
      .course_id(course_id)
      .city_id(city_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Group.findAndCountAll(options);
  }

  getById(id: number): Promise<IGroup | null> {
    return Group.findOne({
      where: {id}
    });
  }
}

export const groupService = new GroupService();
