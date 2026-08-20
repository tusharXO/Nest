import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { randomUUID } from "crypto";

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
    @Prop({ type: String, default: () => randomUUID() })
    _id!: string;

    @Prop()
    name!: string;

    @Prop()
    description!: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);