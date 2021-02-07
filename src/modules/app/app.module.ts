import { AuthModule } from '@modules/auth';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
