import {NextFunction, Request, Response} from 'express';

import * as express from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as dotEnv from 'dotenv';
import * as path from 'path';
import {config} from './configs';

dotEnv.config();

class App {
  public readonly app: express.Application = express();

  constructor() {
    global.appRoot = path.resolve(process.cwd(), '../');
    this.app.use(morgan(config.MORGAN_FORMAT));
    this.app.use(cors()); // TODO CORS OPTIONS
    this.app.use(helmet());
    this.app.use(rateLimit(config.SERVER_RATE_LIMIT));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static(path.resolve(global.appRoot, 'public')));
    // TODO Router
    this.app.use(this.customErrorHandler);
  }

  private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res
      .status(err.status || 500) //TODO error
      .json({
        message: err.message || 'Unknown error',
        code: err.code || 400
      });

  }
}

export const app = new App().app;
