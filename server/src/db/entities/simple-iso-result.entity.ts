import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "@db/entities/user.entity";

@Entity()
export class SimpleIsoResultEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  product_concentration: number;

  @Column()
  product_temperature: number;

  @Column({ type: "timestamptz" })
  createdTime: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.simpleIsoRes, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  user: UserEntity;
}
