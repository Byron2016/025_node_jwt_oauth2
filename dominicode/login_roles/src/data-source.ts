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

const db_host = MYSQLDB_HOST;
const db_user = MYSQLDB_USER;
const db_pass = MYSQLDB_PASS;
const db_name = MYSQLDB_NAME;
const db_port = MYSQLDB_PORT;

export const AppDataSource = new DataSource({
  type: "mysql",
  //host: "aws.connect.psdb.cloud",
  // port: process.env.DATABASEPORT || 3306,
  // username: process.env.USERNAMEDC || dataKey.database.username,
  // password: process.env.PASSWORDDC || dataKey.database.password,
  // database: process.env.DATABASEDC || dataKey.database.database,
  host: db_host,
  port: db_port,
  username: db_user,
  password: db_pass,
  database: db_name,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false,
  },
});
