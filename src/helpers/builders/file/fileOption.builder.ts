import {Op} from 'sequelize';

import {OptionBuilder} from '../options';

export abstract class FileOptionBuilder extends OptionBuilder {

  name(name: string | undefined): this {
    if (name) {
      this._options.where.name = {
        [Op.substring]: name
      };
    }

    return this;
  }

  path(path: string | undefined): this {
    if (path) {
      this._options.where.path = {
        [Op.substring]: path
      };
    }

    return this;
  }

  document_type(document_type: string | undefined): this {
    if (document_type) {
      this._options.where.document_type = {
        [Op.substring]: document_type
      };
    }

    return this;
  }
}
