import * as http from 'http';

import {app} from './app';
import {config, sequelize, syncOptions} from './configs';
import {logger} from './loggers';

const server = http.createServer(app);

sequelize.sync(syncOptions)
  .then(() => server.listen(config.PORT, () => console.log(`(☞ﾟヮﾟ)☞ Server ready at http://localhost:${config.PORT}/ ☜(ﾟヮﾟ☜)`)))
  .catch(error => {
    logger.error(error);
    server.close(() => process.exit(0));
  });

process.on('SIGTERM', () => server.close(() => process.exit(0)));

process.on('uncaughtException', () => server.close(() => process.exit(0)));

process.on('unhandledRejection', () => server.close(() => process.exit(0)));
