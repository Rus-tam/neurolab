import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "@db/entities/user.entity";

@Entity()
export class TokenEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  token: string;

  @Column({ type: "timestamptz" })
  exp: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.token, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  user: UserEntity;

  @Column()
  userId: string;
}
