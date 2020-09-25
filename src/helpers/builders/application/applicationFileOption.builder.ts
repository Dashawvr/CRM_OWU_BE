import {FileOptionBuilder} from '../file';

export class ApplicationFileOptionBuilder extends FileOptionBuilder {

  application_id(application_id: string | undefined): this {
    if (application_id) {
      this._options.where.application_id = +application_id;
    }

    return this;
  }
}
