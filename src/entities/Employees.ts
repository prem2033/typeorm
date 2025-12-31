import { Entity, PrimaryGeneratedColumn, Column , Index} from "typeorm";

@Index("IDX_EMPLOYEE_EMPID", ["empid"])
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
