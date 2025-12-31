import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column({ type: "varchar", length: 128, nullable: true })
  name?: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  empid?: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  phonenumber?: string;
}
