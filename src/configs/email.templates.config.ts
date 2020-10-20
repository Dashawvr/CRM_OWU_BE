import {join} from 'path';

export const emailTemplatesConfig = {
  message: {},
  views: {
    root: join(process.cwd(), 'src', 'templates', 'email', 'templates')
  }
};
