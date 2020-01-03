import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationService } from './location/location.service';
import { LocationController } from './location/location.controller';
import { Distrito  } from './district.entity';
import { Provincia } from './province.entity';
import { Departamentos }  from './department.entity';
@Module({
	imports : [TypeOrmModule.forFeature([Distrito, Provincia, Departamentos ])],
  	providers: [LocationService],
  	controllers: [LocationController]
})
export class LocationModule {}
