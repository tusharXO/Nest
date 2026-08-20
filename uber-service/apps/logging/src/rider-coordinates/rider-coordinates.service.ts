import { Inject, Injectable } from '@nestjs/common';
import {
  RiderCoordinates,
  RiderCoordinatesDocument,
} from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRiderCoordinatesDto } from './dto/rider-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinates.name)
    private readonly riderCoordinates: Model<RiderCoordinatesDocument>,
    @Inject('RIDER_SERVICE') private readonly client: ClientProxy,
  ) {}

  async getRiderCoordinates(id: string) {
    const riderCoordinates = await this.riderCoordinates.findOne({
      riderId: id,
    });
    const riderData = await firstValueFrom(
      this.client.send({ cmd: 'get_rider_by_id' }, id),
    );
    return { riderCoordinates, riderData };
  }

  async createRiderCoordinates(
    createRiderCoordinatesDto: CreateRiderCoordinatesDto,
  ) {
    return await this.riderCoordinates.create(createRiderCoordinatesDto);
  }
}
