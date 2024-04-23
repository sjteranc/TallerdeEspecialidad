import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersModule } from './users.module'; // Import the missing 'UsersModule'
@Module({
  imports: [
  ConfigModule.forRoot({
    envFilePath: `.env`,
    isGlobal: true,
  }),
  TypeOrmModule.forRoot({ ...DataSourceConfig }), UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
//	providers: [AppService],
})

export class AppModule {}
