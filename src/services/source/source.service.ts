import {ISourceParams, ISourceResponse, ISourceUpdateFields} from '../../interfaces';
import {ISource, Source} from '../../database';
import {SourceOptionBuilder} from '../../helpers';

class SourceService {

  create(source: ISource): Promise<ISource> {
    return Source.create(source);
  }

  update(id: number, updateFields: ISourceUpdateFields): Promise<[number, ISource[]]> {
    return Source.update(updateFields, {
      where: {id}
    });
  }

  delete(id: number): Promise<number> {
    return Source.destroy({
      where: {id}
    });
  }

  getAll(params: ISourceParams): Promise<ISourceResponse> {
    const {
      name,
      description,
      application_id,
      pageIndex,
      pageSize,
      order,
      sort
    } = params;

    const options = new SourceOptionBuilder()
      .name(name)
      .description(description)
      .application_id(application_id)
      .offset(pageIndex, pageSize)
      .limit(pageSize)
      .order(sort, order)
      .build();

    return Source.findAndCountAll(options);
  }

  getById(id: number): Promise<ISource | null> {
    return Source.findOne({
      where: {id}
    });
  }
}

export const sourceService = new SourceService();
