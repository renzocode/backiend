import { Entity, Column, PrimaryGeneratedColumn , ManyToOne, OneToMany} from "typeorm";
import { Departamentos } from './department.entity';
import { Distrito } from './district.entity';

@Entity()
export class Provincia{

	@PrimaryGeneratedColumn()
	provinceId : number;

	@Column()
	provincia : string;

	@ManyToOne(type => Departamentos, department=>department.provinceArray)
	departamentId: number;

	@OneToMany(type => Distrito, district=>district.provinceId, 
		{ cascade: ['insert', 'update'] }
	)	
	districtArray : Distrito[];
}

