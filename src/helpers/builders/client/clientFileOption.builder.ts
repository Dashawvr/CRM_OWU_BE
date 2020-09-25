import {FileOptionBuilder} from '../file';

export class ClientFileOptionBuilder extends FileOptionBuilder {

  client_id(client_id: string | undefined): this {
    if (client_id) {
      this._options.where.client_id = +client_id;
    }

    return this;
  }
}
