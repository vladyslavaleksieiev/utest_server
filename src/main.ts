import { setupDatabase } from '@database/setup';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  setupDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
