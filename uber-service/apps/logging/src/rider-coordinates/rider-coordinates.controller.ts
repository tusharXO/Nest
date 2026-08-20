import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { CreateRiderCoordinatesDto } from './dto/rider-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}

    @Get(':id')
    getRiderCoordinates(@Param('id') id: string) {
        return this.riderCoordinatesService.getRiderCoordinates(id);
    }

    @Post()
    createRiderCoordinates(@Body() createRiderCoordinatesDto: CreateRiderCoordinatesDto) {
        return this.riderCoordinatesService.createRiderCoordinates(createRiderCoordinatesDto);
    }
}
