import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CRUD_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'crud',
          protoPath: join(__dirname, './crud.proto'),
        },
      },
    ]),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
