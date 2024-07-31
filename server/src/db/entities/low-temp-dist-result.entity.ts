import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class LowTempDistillationEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "float" })
    gas_feed_temperature: number;

    @Column({ type: "float" })
    gas_feed_pressure: number;

    @Column({ type: "float" })
    gas_feed_mass_flow: number;

    @Column({ type: "float" })
    gas_feed_ch4_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_c2h6_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_c3h8_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_ic4h10_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_nc4h10_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_ic5h12_mass_frac: number;

    @Column({ type: "float" })
    gas_feed_nc5h12_mass_frac: number;

    @Column({ type: "float" })
    comp_frac: number;

    @Column({ type: "float" })
    stream_3_pressure: number;

    @Column({ type: "float" })
    stream_1_mass_flow: number;

    @Column({ type: "float" })
    stream_2_mass_flow: number;

    @Column({ type: "float" })
    stream_1_methane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_ethane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_propane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_i_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_n_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_i_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_1_n_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_methane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_ethane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_propane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_i_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_n_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_i_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_2_n_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_3_temperature: number;

    @Column({ type: "float" })
    expander_power: number;

    @Column({ type: "float" })
    stream_16_temperature: number;

    @Column({ type: "float" })
    stream_17_temperature: number;

    @Column({ type: "float" })
    stream_16_mass_flow: number;

    @Column({ type: "float" })
    stream_17_mass_flow: number;

    @Column({ type: "float" })
    stream_16_methane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_ethane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_propane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_i_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_n_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_i_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_16_n_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_methane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_ethane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_propane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_i_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_n_butane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_i_pentane_mass_fr: number;

    @Column({ type: "float" })
    stream_17_n_pentane_mass_fr: number;

    @Column({ type: "float" })
    column_power: number;

    @Column({ type: "timestamptz" })
    createdTime: Date;

    @ManyToOne(() => UserEntity, (user: UserEntity) => user.lowTempDistRes, {
        onDelete: "CASCADE",
        orphanedRowAction: "delete",
    })
    user: UserEntity;
}