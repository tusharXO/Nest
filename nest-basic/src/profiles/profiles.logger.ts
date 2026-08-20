import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilesLogger {
    log(message: string){
        console.log(`[ProfilesLogger] ${message}`);
    }
}