import { Global,Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '././users/services/users.service';
import { UsersController } from '././users/controllers/users.controller';
import { UsersEntity } from './entities/users.entity';

@Global()
@Module({
	imports: [
		TypeOrmModule.forFeature([UsersEntity])
	],
	providers: [UsersService],
	controllers: [UsersController],
	exports:[UsersService, TypeOrmModule]
})
export class UsersModule {}