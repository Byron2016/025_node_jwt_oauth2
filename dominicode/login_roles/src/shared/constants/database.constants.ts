import { configService } from "nest-shared";

export const MYSQLDB_HOST: string = configService.getValue("DBHOSTDC");
export const MYSQLDB_USER: string = configService.getValue("USERNAMEDC");
export const MYSQLDB_PASS: string = configService.getValue("PASSWORDDC");
export const MYSQLDB_PORT: number = configService.getValue("DBPORTDC");
export const MYSQLDB_NAME: string = configService.getValue("DBNAMEDC");
