import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from "typeorm";

@Entity("users")
export class Users {
@PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column({ type: "varchar", length: 128, nullable: true })
  name?: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  city?: string;

  @Column("timestamp", { name: "_uts", default: () => "CURRENT_TIMESTAMP" })
  uts: Date;
  timestamp!: Date | string;
}
