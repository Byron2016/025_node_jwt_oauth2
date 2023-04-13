import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
const dataKey:any = require("../data-key.json");

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "aws.connect.psdb.cloud",
    port: 3306,
    username: dataKey.database.username,
    password: dataKey.database.password,
    database: "login_node",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    ssl: {
        rejectUnauthorized: false,
    }
})
