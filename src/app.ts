import {NextFunction, Request, Response} from 'express';

import * as express from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as dotEnv from 'dotenv';
import * as path from 'path';

import {ResponseStatusCodesEnum} from './constants';
import {config, corsOptions} from './configs';
import {errors} from './errors';
import {apiRouter, notFoundRouter} from './routes';

dotEnv.config();

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.app.use(morgan(config.MORGAN_FORMAT));
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(rateLimit(config.SERVER_RATE_LIMIT));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static(path.resolve(process.cwd(), '../', 'public')));
    this.app.use(this.customErrorHandler);
    this.mountRoutes();
  }

  private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
    res
      .status(err.status || ResponseStatusCodesEnum.SERVER_ERROR)
      .json({
        message: err.message || errors.SERVER_UNKNOWN_ERROR.message,
        code: err.code || errors.SERVER_UNKNOWN_ERROR.code
      });

  }

  private mountRoutes(): void {
    this.app.use('/api', apiRouter);
    this.app.use('*', notFoundRouter);
  }
}

export const app = new App().app;
