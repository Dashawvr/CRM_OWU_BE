import {IGroupParams, IGroupResponse, IGroupUpdateFields} from '../../interfaces';
import {Group, IGroup} from '../../database';
import {GroupOptionBuilder} from '../../helpers';

class GroupService {

  async create(group: IGroup): Promise<IGroup> {
    const {
      clients,
      ...createFields
    } = group;

    const savedGroup = await Group.create(createFields);

    if (clients) {
      await savedGroup.addClients(clients);
    }

    return savedGroup;
  }

  async update(group: IGroup, updateFields: IGroupUpdateFields): Promise<void> {
    const {
      clients,
      ...fields
    } = updateFields;

    await group.update(fields);

    if (clients) {
      await group.setClients(clients);
    }
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
      .practiceFromTo(practiceFrom, practiceTo)
      .startDateFrom(startDateFrom)
      .startDateTo(startDateTo)
      .startDateFromTo(startDateFrom, startDateTo)
      .endDateFrom(endDateFrom)
      .endDateTo(endDateTo)
      .endDateFromTo(endDateFrom, endDateTo)
      .startTimeFrom(startTimeFrom)
      .startTimeTo(startTimeTo)
      .startDateFromTo(startTimeFrom, startTimeTo)
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
