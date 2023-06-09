import dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import helmet from "helmet"; // Security
import routes from "./routes";
import { PORT } from "./shared/constants/app.constants";

dotenv.config();
console.log(PORT);

// const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    // Middlewares
    app.use(cors());
    app.use(helmet());

    app.use(express.json());
    // Routes
    app.use("/", routes);

    // start express server
    app.listen(PORT, () => {
      console.log(
        `Express server has started on port ${PORT}. Open http://localhost:${PORT}/users to see results`
      );
    });
  })
  .catch((error) => console.log(error));

// let count = 0;
// setInterval(() => {
//     console.log(count++)
// }, 1000)
