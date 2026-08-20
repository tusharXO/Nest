import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema()
export class RiderCoordinates {
    @Prop()
    riderId!: string;

    @Prop()
    latitude!: number;

    @Prop()
    longitude!: number;
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);