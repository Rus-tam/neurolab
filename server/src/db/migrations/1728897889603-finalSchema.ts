import { MigrationInterface, QueryRunner } from "typeorm";

export class FinalSchema1728897889603 implements MigrationInterface {
    name = 'FinalSchema1728897889603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "token_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying NOT NULL, "exp" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_687443f2a51af49b5472e2c5ddc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "simple_iso_result_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "vessel_volume" double precision NOT NULL, "feed_temperature" double precision NOT NULL, "feed_mass_flow" double precision NOT NULL, "product_concentration" double precision NOT NULL, "product_temperature" double precision NOT NULL, "createdTime" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" uuid, CONSTRAINT "PK_d4a5e5ae96a7ff2c67b833ed8ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "amine_treatment_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sour_gas_temperature" double precision NOT NULL, "sour_gas_mass_flow" double precision NOT NULL, "sour_gas_pressure" double precision NOT NULL, "sour_gas_co2" double precision NOT NULL, "sour_gas_ch4" double precision NOT NULL, "sour_gas_c2h8" double precision NOT NULL, "sour_gas_c3h8" double precision NOT NULL, "sour_gas_ic4h10" double precision NOT NULL, "sour_gas_nc4h10" double precision NOT NULL, "sour_gas_ic5h12" double precision NOT NULL, "sour_gas_nc5h12" double precision NOT NULL, "sour_gas_h2s" double precision NOT NULL, "sour_gas_h2o" double precision NOT NULL, "sour_gas_MDEA" double precision NOT NULL, "amine_temperature" double precision NOT NULL, "amine_mass_flow" double precision NOT NULL, "amine_pressure" double precision NOT NULL, "amine_co2" double precision NOT NULL, "amine_ch4" double precision NOT NULL, "amine_c2h8" double precision NOT NULL, "amine_c3h8" double precision NOT NULL, "amine_ic4h10" double precision NOT NULL, "amine_nch4h10" double precision NOT NULL, "amine_ic5h12" double precision NOT NULL, "amine_nc5h12" double precision NOT NULL, "amine_h2s" double precision NOT NULL, "amine_h2o" double precision NOT NULL, "amine_MDEA" double precision NOT NULL, "feed_gas_mol_weight" double precision NOT NULL, "lean_amine_mol_weight" double precision NOT NULL, "feed_gas_mass_density" double precision NOT NULL, "lean_amine_mass_density" double precision NOT NULL, "sweet_gas_temperature" double precision NOT NULL, "sweet_gas_mol_flow" double precision NOT NULL, "rich_amine_mol_flow" double precision NOT NULL, "rich_amine_temperature" double precision NOT NULL, "rich_amine_h2s_mol_flow" double precision NOT NULL, "sweet_gas_h2s_mol_flow" double precision NOT NULL, "rich_amine_co2_mol_flow" double precision NOT NULL, "sweet_gas_co2_mol_flow" double precision NOT NULL, "sweet_gas_mol_weight" double precision NOT NULL, "rich_amine_mol_weight" double precision NOT NULL, "createdTime" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" uuid, CONSTRAINT "PK_ca988a0ad1ee80d60b8909d24e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "group" character varying, "email" character varying NOT NULL, "student1" character varying NOT NULL, "student2" character varying, "student3" character varying, "professorName" character varying, "password" character varying NOT NULL, "role" "public"."user_entity_role_enum" NOT NULL, "createdAt" date NOT NULL, "updatedAt" date NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "low_temp_distillation_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "gas_feed_temperature" double precision NOT NULL, "gas_feed_pressure" double precision NOT NULL, "gas_feed_mass_flow" double precision NOT NULL, "gas_feed_ch4_mass_frac" double precision NOT NULL, "gas_feed_c2h6_mass_frac" double precision NOT NULL, "gas_feed_c3h8_mass_frac" double precision NOT NULL, "gas_feed_ic4h10_mass_frac" double precision NOT NULL, "gas_feed_nc4h10_mass_frac" double precision NOT NULL, "gas_feed_ic5h12_mass_frac" double precision NOT NULL, "gas_feed_nc5h12_mass_frac" double precision NOT NULL, "comp_frac" double precision NOT NULL, "stream_3_pressure" double precision NOT NULL, "stream_1_mass_flow" double precision NOT NULL, "stream_2_mass_flow" double precision NOT NULL, "stream_1_methane_mass_fr" double precision NOT NULL, "stream_1_ethane_mass_fr" double precision NOT NULL, "stream_1_propane_mass_fr" double precision NOT NULL, "stream_1_i_butane_mass_fr" double precision NOT NULL, "stream_1_n_butane_mass_fr" double precision NOT NULL, "stream_1_i_pentane_mass_fr" double precision NOT NULL, "stream_1_n_pentane_mass_fr" double precision NOT NULL, "stream_2_methane_mass_fr" double precision NOT NULL, "stream_2_ethane_mass_fr" double precision NOT NULL, "stream_2_propane_mass_fr" double precision NOT NULL, "stream_2_i_butane_mass_fr" double precision NOT NULL, "stream_2_n_butane_mass_fr" double precision NOT NULL, "stream_2_i_pentane_mass_fr" double precision NOT NULL, "stream_2_n_pentane_mass_fr" double precision NOT NULL, "stream_3_temperature" double precision NOT NULL, "expander_power" double precision NOT NULL, "stream_16_temperature" double precision NOT NULL, "stream_17_temperature" double precision NOT NULL, "stream_16_mass_flow" double precision NOT NULL, "stream_17_mass_flow" double precision NOT NULL, "stream_16_methane_mass_fr" double precision NOT NULL, "stream_16_ethane_mass_fr" double precision NOT NULL, "stream_16_propane_mass_fr" double precision NOT NULL, "stream_16_i_butane_mass_fr" double precision NOT NULL, "stream_16_n_butane_mass_fr" double precision NOT NULL, "stream_16_i_pentane_mass_fr" double precision NOT NULL, "stream_16_n_pentane_mass_fr" double precision NOT NULL, "stream_17_methane_mass_fr" double precision NOT NULL, "stream_17_ethane_mass_fr" double precision NOT NULL, "stream_17_propane_mass_fr" double precision NOT NULL, "stream_17_i_butane_mass_fr" double precision NOT NULL, "stream_17_n_butane_mass_fr" double precision NOT NULL, "stream_17_i_pentane_mass_fr" double precision NOT NULL, "stream_17_n_pentane_mass_fr" double precision NOT NULL, "column_power" double precision NOT NULL, "createdTime" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" uuid, CONSTRAINT "PK_a618dbc012989d0061704fe1d2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "token_entity" ADD CONSTRAINT "FK_de044c3492e70d6d9511ee35792" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "simple_iso_result_entity" ADD CONSTRAINT "FK_5b035898b7997635baa002cafe4" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "amine_treatment_entity" ADD CONSTRAINT "FK_3fbfb65a8769092a761f162e9f4" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "low_temp_distillation_entity" ADD CONSTRAINT "FK_675b4591f270ea5efec11e8d33e" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "low_temp_distillation_entity" DROP CONSTRAINT "FK_675b4591f270ea5efec11e8d33e"`);
        await queryRunner.query(`ALTER TABLE "amine_treatment_entity" DROP CONSTRAINT "FK_3fbfb65a8769092a761f162e9f4"`);
        await queryRunner.query(`ALTER TABLE "simple_iso_result_entity" DROP CONSTRAINT "FK_5b035898b7997635baa002cafe4"`);
        await queryRunner.query(`ALTER TABLE "token_entity" DROP CONSTRAINT "FK_de044c3492e70d6d9511ee35792"`);
        await queryRunner.query(`DROP TABLE "low_temp_distillation_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "amine_treatment_entity"`);
        await queryRunner.query(`DROP TABLE "simple_iso_result_entity"`);
        await queryRunner.query(`DROP TABLE "token_entity"`);
    }

}
