import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Departamentos } from '../department.entity';
import { Provincia } from '../province.entity';
import { Distrito } from '../district.entity';

@Injectable()
export class LocationService {
	constructor(
		@InjectRepository(Departamentos)
		private departmentRepository: Repository<Departamentos>){

	}

	async findAll(): Promise<Departamentos[]>{
		return await this.departmentRepository.find();
	}

	async create(department : Departamentos): Promise<any>{
		const district = new Distrito();
		district.distrito = "Bagua";

		const province = new Provincia();
		province.provincia = "Bagua";
		province.districtArray = [district];


		const depar = new Departamentos();
		depar.departamento = "Amazonas";
		depar.provinceArray = [province];
		console.log(depar);

		return await this.departmentRepository.save(depar);
	}

	async update(department : Departamentos) : Promise<UpdateResult>{
		return await this.departmentRepository.update(department.departmentId, department);
	}

	async delete(departmentId): Promise<DeleteResult>{
		return await this.departmentRepository.delete(departmentId);
	}
}
