import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { ProfilesController } from './profiles/profiles.controller';

@Module({
  imports: [ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes(ProfilesController);
  }
}
