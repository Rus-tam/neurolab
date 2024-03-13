import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class LowTempDistillationEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "float" })
    column_power: number;

    @Column({ type: "float" })
    cooled_gas_pressure: number;

    @Column({ type: "float" })
    feed_gas_ch4: number;

    @Column({ type: "float" })
    feed_gas_c2h6: number;

    @Column({ type: "float" })
    feed_gas_c3h8: number;

    @Column({ type: "float" })
    feed_gas_co2: number;

    @Column({ type: "float" })
    feed_gas_ic4h10: number;

    @Column({ type: "float" })
    feed_gas_ic5h12: number;

    @Column({ type: "float" })
    feed_gas_n2: number;

    @Column({ type: "float" })
    feed_gas_nc4h10: number;

    @Column({ type: "float" })
    feed_gas_nc5h12: number;

    @Column({ type: "float" })
    feed_gas_mass_flow: number;

    @Column({ type: "float" })
    feed_gas_pressure: number;

    @Column({ type: "float" })
    feed_gas_temperature: number;

    @Column({ type: "float" })
    sep_vap_mass_flow: number;

    @Column({ type: "float" })
    sep_liq_mass_flow: number;

    @Column({ type: "float" })
    sep_vap_ch4: number;

    @Column({ type: "float" })
    sep_vap_c2h6: number;

    @Column({ type: "float" })
    sep_vap_c3h8: number;

    @Column({ type: "float" })
    sep_vap_ic4h10: number;

    @Column({ type: "float" })
    sep_vap_nc4h10: number;

    @Column({ type: "float" })
    sep_vap_ic5h12: number;

    @Column({ type: "float" })
    sep_vap_nc5h12: number;

    @Column({ type: "float" })
    sep_liq_ch4: number;

    @Column({ type: "float" })
    sep_liq_c2h6: number;

    @Column({ type: "float" })
    sep_liq_c3h8: number;

    @Column({ type: "float" })
    sep_liq_ic4h10: number;

    @Column({ type: "float" })
    sep_liq_nc4h10: number;

    @Column({ type: "float" })
    sep_liq_ic5h12: number;

    @Column({ type: "float" })
    sep_liq_nc5h12: number;

    @Column({ type: "float" })
    cooled_gas_temperature: number;

    @Column({ type: "float" })
    expander_power: number;

    @Column({ type: "float" })
    column_bot_prod_temp: number;

    @Column({ type: "float" })
    column_top_prod_temp: number;

    @Column({ type: "float" })
    column_top_prod_mass_flow: number;

    @Column({ type: "float" })
    column_bot_prod_mass_flow: number;

    @Column({ type: "float" })
    col_top_ch4: number;

    @Column({ type: "float" })
    col_top_c2h6: number;

    @Column({ type: "float" })
    col_top_c3h8: number;

    @Column({ type: "float" })
    col_top_ic4h10: number;

    @Column({ type: "float" })
    col_top_nc4h10: number;

    @Column({ type: "float" })
    col_top_ic5h12: number;

    @Column({ type: "float" })
    col_top_nc5h12: number;

    @Column({ type: "float" })
    col_bot_ch4: number;

    @Column({ type: "float" })
    col_bot_c2h6: number;

    @Column({ type: "float" })
    col_bot_c3h8: number;

    @Column({ type: "float" })
    col_bot_ic4h10: number;

    @Column({ type: "float" })
    col_bot_nc4h10: number;

    @Column({ type: "float" })
    col_bot_ic5h12: number;

    @Column({ type: "float" })
    col_bot_nc5h12: number;

    @Column({ type: "timestamptz" })
    createdTime: Date;

    @ManyToOne(() => UserEntity, (user: UserEntity) => user.lowTempDistRes, {
        onDelete: "CASCADE",
        orphanedRowAction: "delete",
    })
    user: UserEntity;
}