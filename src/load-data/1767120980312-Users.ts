import { type MigrationInterface, type QueryRunner } from "typeorm";

export class SeedUsersAndEmployees1700000000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert USERS
        await queryRunner.query(`
      INSERT INTO users (name, city)
      VALUES
        ('Alice', 'New York'),
        ('Bob', 'London'),
        ('Charlie', 'Berlin'),
        ('Prem', 'Paris')
    `);

        // Insert EMPLOYEES
        await queryRunner.query(`
      INSERT INTO employee (name, empid, phonenumber)
      VALUES
        ('John', 'E001', '1234567890'),
        ('Jane', 'E002', '9876543210'),
        ('Mark', 'E003', NULL),
        ('Prem', 'E004', NULL)
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert EMPLOYEES first (reverse order)
        await queryRunner.query(`
      DELETE FROM employee
      WHERE empid IN ('E001', 'E002', 'E003', 'E004')
    `);

        // Revert USERS
        await queryRunner.query(`
      DELETE FROM users
      WHERE name IN ('Alice', 'Bob', 'Charlie' , 'Prem')
    `);
    }
}
