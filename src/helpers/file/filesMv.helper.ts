import {UploadedFile} from 'express-fileupload';
import {mkdirSync} from 'fs';
import {resolve} from 'path';

export const filesMv = async (path: string, files: UploadedFile | UploadedFile[]): Promise<void> => {

  if (!Array.isArray(files)) {
    files = [files];
  }

  for await (const file of files) {
    mkdirSync(resolve(path), {recursive: true});
    await file.mv(resolve(`${path}/${file.name}`));
  }
};
