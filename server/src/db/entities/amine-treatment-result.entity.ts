import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "@db/entities/user.entity";

@Entity()
export class AmineTreatmentEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  sour_gas_temperature: number;

  @Column({ type: "float" })
  sour_gas_mass_flow: number;

  @Column({ type: "float" })
  sour_gas_pressure: number;

  @Column({ type: "float" })
  sour_gas_co2: number;

  @Column({ type: "float" })
  sour_gas_ch4: number;

  @Column({ type: "float" })
  sour_gas_c2h8: number;

  @Column({ type: "float" })
  sour_gas_c3h8: number;

  @Column({ type: "float" })
  sour_gas_ic4h10: number;

  @Column({ type: "float" })
  sour_gas_nc4h10: number;

  @Column({ type: "float" })
  sour_gas_ic5h12: number;

  @Column({ type: "float" })
  sour_gas_nc5h12: number;

  @Column({ type: "float" })
  sour_gas_h2s: number;

  @Column({ type: "float" })
  sour_gas_h2o: number;

  @Column({ type: "float" })
  sour_gas_MDEA: number;

  @Column({ type: "float" })
  amine_temperature: number;

  @Column({ type: "float" })
  amine_mass_flow: number;

  @Column({ type: "float" })
  amine_pressure: number;

  @Column({ type: "float" })
  amine_co2: number;

  @Column({ type: "float" })
  amine_ch4: number;

  @Column({ type: "float" })
  amine_c2h8: number;

  @Column({ type: "float" })
  amine_c3h8: number;

  @Column({ type: "float" })
  amine_ic4h10: number;

  @Column({ type: "float" })
  amine_nch4h10: number;

  @Column({ type: "float" })
  amine_ic5h12: number;

  @Column({ type: "float" })
  amine_nc5h12: number;

  @Column({ type: "float" })
  amine_h2s: number;

  @Column({ type: "float" })
  amine_h2o: number;

  @Column({ type: "float" })
  amine_MDEA: number;

  @Column({ type: "float" })
  feed_gas_mol_weight: number;

  @Column({ type: "float" })
  lean_amine_mol_weight: number;

  @Column({ type: "float" })
  feed_gas_mass_density: number;

  @Column({ type: "float" })
  lean_amine_mass_density: number;

  @Column({ type: "float" })
  sweet_gas_temperature: number;

  @Column({ type: "float" })
  sweet_gas_mol_flow: number;

  @Column({ type: "float" })
  rich_amine_mol_flow: number;

  @Column({ type: "float" })
  rich_amine_temperature: number;

  @Column({ type: "float" })
  rich_amine_h2s_mol_flow: number;

  @Column({ type: "float" })
  sweet_gas_h2s_mol_flow: number;

  @Column({ type: "float" })
  rich_amine_co2_mol_flow: number;

  @Column({ type: "float" })
  sweet_gas_co2_mol_flow: number;

  @Column({ type: "float" })
  sweet_gas_mol_weight: number;

  @Column({ type: "float" })
  rich_amine_mol_weight: number;

  @Column({ type: "timestamptz" })
  createdTime: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.amineTreatmentRes, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  user: UserEntity;
}
