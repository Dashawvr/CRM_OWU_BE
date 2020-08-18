import * as http from 'http';
import {app} from './app';
import {config, sequelize} from './configs';

const server = http.createServer(app);

sequelize.sync(config.SEQUELIZE_SYNC_OPTIONS)
  .then(() => server.listen(config.PORT, () => console.log(`(☞ﾟヮﾟ)☞ Server ready at http://localhost:${config.PORT}/ ☜(ﾟヮﾟ☜)`)))
  .catch(error => {
    //TODO LOGGER
    server.close(() => process.exit(0));
  });

// TODO LOGGER
process.on('SIGTERM', () => server.close(() => process.exit(0)));

process.on('uncaughtException', () => server.close(() => process.exit(0)));

process.on('unhandledRejection', () => server.close(() => process.exit(0)));

