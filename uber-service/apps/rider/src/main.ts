import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

async function bootstrap() {
  // const app = await NestFactory.create(RiderModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
