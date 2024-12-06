import express, { Request, Response, NextFunction } from "express";
import "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { activateAPI } from "./api/api";
import { errorHandler } from "./middlewere/errorHandler";

dotenv.config({ path: "./dev.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({
      success: true,
      message: `Server running successfully on port ${PORT}`,
    });
  } catch (e) {
    next(e);
  }
});

app.use("/api", activateAPI());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow);
});
