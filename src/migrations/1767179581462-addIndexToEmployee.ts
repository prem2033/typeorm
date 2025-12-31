import { type MigrationInterface, type QueryRunner } from "typeorm";

export class AddIndexToEmployee1767179581462 implements MigrationInterface {
    name = 'AddIndexToEmployee1767179581462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX \`IDX_EMPLOYEE_EMPID\` ON \`employee\` (\`empid\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_EMPLOYEE_EMPID\` ON \`employee\``);
    }

}
