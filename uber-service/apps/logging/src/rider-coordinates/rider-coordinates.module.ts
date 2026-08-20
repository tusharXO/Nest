import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import {
  RiderCoordinates,
  RiderCoordinatesSchema,
} from './schemas/rider-coordinates.schema';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { ClientsModule } from '@nestjs/microservices/module/clients.module';

@Module({
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  imports: [
    MongooseModule.forFeature([
      { name: RiderCoordinates.name, schema: RiderCoordinatesSchema },
    ]),
    ClientsModule.register([
      { name: 'RIDER_SERVICE', transport: Transport.TCP },
    ]),
  ],
})
export class RiderCoordinatesModule {}
