// import { configService } from "nest-shared";

// export const MYSQLDB_HOST: string = configService.getValue("DBHOSTDC");
// export const MYSQLDB_USER: string = configService.getValue("USERNAMEDC");
// export const MYSQLDB_PASS: string = configService.getValue("PASSWORDDC");
// export const MYSQLDB_PORT: number = configService.getValue("DBPORTDC");
// export const MYSQLDB_NAME: string = configService.getValue("DBNAMEDC");

import dotenv from "dotenv";
dotenv.config();

const port = +process.env.DBPORTDC;

export const MYSQLDB_HOST: string = process.env.DBHOSTDC;
export const MYSQLDB_USER: string = process.env.USERNAMEDC;
export const MYSQLDB_PASS: string = process.env.PASSWORDDC;
export const MYSQLDB_PORT: number = 3306;
export const MYSQLDB_NAME: string = process.env.DBNAMEDC;
