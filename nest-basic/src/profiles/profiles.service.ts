import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesLogger } from './profiles.logger';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schemas/profiles.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProfilesService {
    constructor(@InjectModel(Profile.name) private profileModel: Model<Profile>, private readonly logger: ProfilesLogger) {}

    async findAll() {
        this.logger.log('Fetching all profiles');
        return this.profileModel.find().exec();
    }

    async findOne(id : string){
        this.logger.log(`Fetching profile with ID: ${id}`);
        const profile = await this.profileModel.findById(id).exec();

        if(!profile){
            throw new NotFoundException(`Profile with ${id} was not found.`)
        }

        return profile;
    }

    async createProfile(createProfile : CreateProfileDto){
        const profile = new this.profileModel(createProfile);
        await profile.save();
        this.logger.log(`Creating new profile with ID: ${profile.id}`);
        return profile;
    }

    async updateProfile(id : string, updateProfile:UpdateProfileDto){
        const updatedProfile = await this.profileModel.findByIdAndUpdate(id, updateProfile, {returnDocument : 'after', useValidation: true}).exec();

        this.logger.log(`Updating profile with ID: ${id}`);
        return updatedProfile;
    }

    async deleteProfile(id : string): Promise<void>{
        const deletedProfile = await this.profileModel.findByIdAndDelete(id).exec()

        if(deletedProfile === null){
            throw new NotFoundException(`Profile with ${id} was not found.`)
        }
        
        this.logger.log(`Deleting profile with ID: ${id}`);
    }
}
