import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { imageRouter, imagesRouter } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/image", imageRouter);
app.use("/api/images", imagesRouter);

app.get("/api", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
