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

  // ✅ NEW COLUMN
  @Column({ type: "varchar", length: 8, nullable: true })
  countryCode?: string;

  @Column("timestamp", { name: "_uts", default: () => "CURRENT_TIMESTAMP" })
  uts?: Date;
}
