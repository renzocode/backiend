import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Departamentos } from './location/department.entity';
import { Provincia } from './location/province.entity';
import { Distrito } from './location/district.entity';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
  TypeOrmModule.forRoot(
  	{
  	  type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'springstudent',
      password: 'springstudent',
      database: 'depart-provin-dist-01',
      entities: [
          Distrito,
          Provincia,
          Departamentos
      ],
      synchronize: true,
  	}
  ), 
   LocationModule
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
