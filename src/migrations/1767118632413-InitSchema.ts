import { type MigrationInterface, type QueryRunner } from "typeorm";

export class InitSchema1767117608387 implements MigrationInterface {
    name = 'InitSchema1767117608387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(128) NULL, \`city\` varchar(128) NULL, \`_uts\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(128) NULL, \`empid\` varchar(128) NULL, \`phonenumber\` varchar(128) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`employee\``);

    }

}
