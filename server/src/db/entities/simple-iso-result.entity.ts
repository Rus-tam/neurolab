import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "@db/entities/user.entity";
import { CompletionListener } from "concurrently/dist/src/completion-listener";

@Entity()
export class SimpleIsoResultEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float" })
  vessel_volume: number;

  @Column({ type: "float" })
  feed_temperature: number;

  @Column({ type: "float" })
  feed_mass_flow: number;

  @Column({ type: "float" })
  product_concentration: number;

  @Column({ type: "float" })
  product_temperature: number;

  @Column({ type: "timestamptz" })
  createdTime: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.simpleIsoRes, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  user: UserEntity;
}
