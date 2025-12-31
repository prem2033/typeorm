import { DataSource } from 'typeorm';
import { Users } from './entities/Users.js';
import "reflect-metadata";
import { Employee } from './entities/Employees.js';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "texecom",
  password: "texecom",
  database: "testdb",
  metadataTableName: "migration",
  synchronize: false, // IMPORTANT
  logging: false,
  entities: [Users, Employee],
  migrations: ["src/migrations/*.ts"]
});