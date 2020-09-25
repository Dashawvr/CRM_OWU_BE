import {IOptions} from '../../../interfaces';

export abstract class OptionBuilder {
  protected readonly _options: IOptions = {
    where: {},
    limit: 25,
    offset: 0,
    order: [['createdAt', 'DESC']]
  };

  offset(pageIndex: number | undefined, pageSize: number | undefined): OptionBuilder {
    if (pageIndex && pageSize) {
      this._options.offset = +pageIndex * +pageSize;
    }

    return this;
  }

  limit(pageSize: number | undefined): OptionBuilder {
    if (pageSize) {
      this._options.limit = +pageSize;
    }

    return this;
  }

  order(field: string | undefined, order: string | undefined): OptionBuilder {
    if (field && order) {
      this._options.order = [[field, order]];
    }

    return this;
  }

  build(): IOptions {
    return this._options;
  }
}
