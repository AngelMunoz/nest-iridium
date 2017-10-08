import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

(async function start() {
  const instance = express();
  instance.use(bodyParser.json());
  try {
    const app = await NestFactory.create(ApplicationModule, instance);
    app.listen(3000, () => console.log('Application is listening on port 3000'));
  } catch (error) {
    console.error(error);
  }
})();