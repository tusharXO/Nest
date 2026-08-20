import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { RoleGuard } from '../guard/role.guard';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService : ProfilesService) {}

    @Get()
    findAll() {
        return this.profilesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id : UUID){
        return this.profilesService.findOne(id);
    }

    @Post()
    create(@Body() createProfileDto:CreateProfileDto) {
        return this.profilesService.createProfile(createProfileDto);
    }

    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id : UUID, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profilesService.updateProfile(id,updateProfileDto)
    }

    // @Delete(':id')
    // @UseGuards(RoleGuard)
    // @HttpCode(HttpStatus.NO_CONTENT)
    // remove(@Param('id', ParseUUIDPipe) id : UUID){
    //     return this.profilesService.deleteProfile(id)
    // }
}
