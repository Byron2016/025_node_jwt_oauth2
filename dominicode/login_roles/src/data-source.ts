import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
// const dataKey: any = require("./data-key.json");
import {
  MYSQLDB_HOST,
  MYSQLDB_USER,
  MYSQLDB_PASS,
  MYSQLDB_NAME,
  MYSQLDB_PORT,
} from "./shared/constants/database.constants";

export const AppDataSource = new DataSource({
  type: "mysql",
  //host: "aws.connect.psdb.cloud",
  // port: process.env.DATABASEPORT || 3306,
  // username: process.env.USERNAMEDC || dataKey.database.username,
  // password: process.env.PASSWORDDC || dataKey.database.password,
  // database: process.env.DATABASEDC || dataKey.database.database,
  host: MYSQLDB_HOST,
  port: MYSQLDB_PORT,
  username: MYSQLDB_USER,
  password: MYSQLDB_PASS,
  database: MYSQLDB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false,
  },
});
