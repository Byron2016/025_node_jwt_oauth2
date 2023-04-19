// import { configService } from 'nest-shared';

// export const PORT = configService.getPort() || 3000;
import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
