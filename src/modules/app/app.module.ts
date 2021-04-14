import { AuthModule } from '@modules/auth';
import { RecordController, RecordModule } from '@modules/record';
import { ChechAuthMiddleware } from '@modules/shared';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [AuthModule, RecordModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ChechAuthMiddleware).forRoutes(RecordController);
  }
}
