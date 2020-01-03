import { Entity, Column, PrimaryGeneratedColumn , ManyToOne} from "typeorm";
import { Provincia } from './province.entity';
@Entity()
export class Distrito{

	@PrimaryGeneratedColumn()
	districtId : number;

	@Column()
	distrito : string;

	@ManyToOne(type => Provincia, province => province.districtArray)
    provinceId: number;
}