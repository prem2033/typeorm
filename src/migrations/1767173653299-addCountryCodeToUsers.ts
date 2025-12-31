import { type MigrationInterface, type QueryRunner } from "typeorm";

export class AddCountryCodeToUsers1767173653299 implements MigrationInterface {
    name = 'AddCountryCodeToUsers1767173653299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`countryCode\` varchar(8) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`countryCode\``);
    }

}
