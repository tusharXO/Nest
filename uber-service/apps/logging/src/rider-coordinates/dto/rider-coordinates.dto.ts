import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRiderCoordinatesDto {
    @IsString()
    @IsNotEmpty()
    riderId!: string;

    @IsNumber()
    @IsNotEmpty()
    latitude!: number;

    @IsNumber()
    @IsNotEmpty()
    longitude!: number;
}