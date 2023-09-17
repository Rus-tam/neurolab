import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  RelationId,
} from "typeorm";
import { UserEntity } from "@db/entities/user.entity";

@Entity()
export class TokenEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  token: string;

  @Column({ type: "date" })
  exp: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.token, {
    onDelete: "CASCADE",
    orphanedRowAction: "delete",
  })
  user: UserEntity;

  @RelationId((token: TokenEntity) => token.user)
  userId: string;
}
