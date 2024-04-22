import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UsersService } from './users/services/users.service';
import { UsersController } from './users/controllers/users.controller';

@Module({
	imports: [
	ConfigModule.forRoot({
		envFilePath: '.env',
		isGlobal: true,
	}),
	TypeOrmModule.forRoot({ ...DataSourceConfig }),
	],
	controllers: [AppController, UsersController],
	providers: [AppService, UsersService],
})

export class AppModule {}
