import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { ProfilesLogger } from './profiles.logger';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/profiles.schema';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, ProfilesLogger],
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/profiles'), MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
})
export class ProfilesModule { }
