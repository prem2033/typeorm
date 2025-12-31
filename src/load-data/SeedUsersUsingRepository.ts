import { type MigrationInterface, type QueryRunner } from "typeorm";
import { Users } from "../entities/Users.js";

export class SeedUsersUsingRepository1700000000000
  implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const userRepo = queryRunner.manager.getRepository(Users);

    await userRepo.save([
      { name: "Alice1", city: "New York" },
      { name: "Bob1", city: "London" },
      { name: "Charlie1", city: "Berlin" },
      { city: "Paris1" }
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userRepo = queryRunner.manager.getRepository(Users);

    await userRepo.delete([
      { name: "Alice1", city: "New York" },
      { name: "Bob1", city: "London" },
      { name: "Charlie1", city: "Berlin" },
      { city: "Paris1" }
    ]);
  }
}
