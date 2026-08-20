import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @MessagePattern({ cmd: 'get_rider_by_id' })
  async getRiderById(id: string) {
    return Promise.resolve({
      _id: id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
  }
}
