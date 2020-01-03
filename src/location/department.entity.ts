import { Entity, Column, PrimaryGeneratedColumn , OneToMany} from 'typeorm';
import { Provincia } from './province.entity';

@Entity()
export class Departamentos{

	@PrimaryGeneratedColumn()
	departmentId : number;

	@Column()
	departamento : string;

	@OneToMany(type => Provincia, province=> province.departamentId, { 
		cascade: ['insert', 'update'] 
	})
	provinceArray : Provincia[];
}