import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "@types";
import { TokenEntity } from "@db/entities/token.entity";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  group: string | null;

  @Column()
  email: string;

  @Column()
  student1: string;

  @Column({ nullable: true })
  student2: string | null;

  @Column({ nullable: true })
  student3: string | null;

  @Column({ nullable: true })
  professorName: string | null;

  @Column()
  password: string;

  @Column({ type: "enum", enum: Roles })
  role: Roles;

  @OneToMany(() => TokenEntity, (token: TokenEntity) => token.user, {
    cascade: ["remove"],
  })
  @JoinColumn()
  token: TokenEntity;

  @OneToMany(
    () => SimpleIsoResultEntity,
    (simpleIsoRes: SimpleIsoResultEntity) => simpleIsoRes.user,
    {
      cascade: ["remove"],
    },
  )
  @JoinColumn()
  simpleIsoRes: SimpleIsoResultEntity;

  @Column({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  updatedAt: Date;
}
