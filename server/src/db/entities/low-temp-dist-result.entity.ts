import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LowTempDistillationEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "float" })
    sour_gas_temperature: number;
}