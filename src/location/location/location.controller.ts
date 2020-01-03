import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import {  Departamentos }  from '../department.entity';
import {  Provincia} from '../province.entity';
import {  Distrito } from '../district.entity';

@Controller('location')
export class LocationController {
	constructor(private _locationService: LocationService){

	}
	@Get()
	index() : Promise<Departamentos[]>{
		return this._locationService.findAll();
	}

	@Post('create')
	async create(@Body() department : Departamentos): Promise<any>{
		console.log(department);
		return this._locationService.create(department);
	}

	@Put(':id/update')
	async update(@Param('id') id , @Body() department: Departamentos) : Promise<any>{
		department.departmentId = Number(id);
		console.log('Update #' + department.departmentId);
		return this._locationService.update(department);
	}

	@Delete(':id/delete')
	async delete(@Param('id') id): Promise<any>{
		return this._locationService.delete(id);
	}
}
