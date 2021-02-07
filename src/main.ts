import { setupDatabase } from '@database/setup';
import { AppModule } from '@modules/app';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  setupDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
