import * as http from 'http';
import {app} from './app';
import {config} from './configs';

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`(☞ﾟヮﾟ)☞ Server ready at http://localhost:${config.PORT}/ ☜(ﾟヮﾟ☜)`);
});
// TODO LOGGER
process.on('SIGTERM', () => server.close(() => process.exit(0)));

process.on('uncaughtException', () => server.close(() => process.exit(0)));

process.on('unhandledRejection', () => server.close(() => process.exit(0)));
