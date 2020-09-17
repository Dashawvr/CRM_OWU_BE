import {NextFunction, Request, Response} from 'express';

import * as express from 'express';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';
import * as fileUpload from 'express-fileupload';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as dotEnv from 'dotenv';
import {resolve} from 'path';

import {ResponseStatusCodes} from './constants';
import {initDBAssociations} from './database';
import {config, corsOptions, rateLimitOptions} from './configs';
import {errors} from './errors';
import {logger} from './loggers';
import {apiRouter, notFoundRouter} from './routes';

dotEnv.config();

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.app.use(morgan(config.MORGAN_FORMAT));
    this.app.use(cors(corsOptions));
    this.app.use(rateLimit(rateLimitOptions));
    this.app.use(fileUpload());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use('/public', express.static(resolve(process.cwd(), 'static')));

    initDBAssociations();
    this.mountRoutes();

    this.app.use(this.logErrors);
    this.app.use(this.customErrorHandler);
  }

  private mountRoutes(): void {
    this.app.use('/api', apiRouter);
    this.app.use('*', notFoundRouter);
  }

  private logErrors = (err: any, req: Request, res: Response, next: NextFunction): void => {
    logger.error({
      method: req.method,
      url: req.path,
      data: req.body,
      time: new Date(),
      massage: err.message
    });
    next(err);
  };

  private customErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    if (err.parent) {
      err.message = err.parent.sqlMessage;
    }

    res
      .status(err.status || ResponseStatusCodes.SERVER_ERROR)
      .json({
        message: err.message || errors.SERVER_UNKNOWN_ERROR.message,
        code: err.code || errors.SERVER_UNKNOWN_ERROR.code
      });
  };
}

export const app = new App().app;
