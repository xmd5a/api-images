import express from "express";
import { addImage, getImage } from "../services";

const imageRouter = express.Router();

/* GET single image. */
imageRouter.get("/", async (req, res, next) => {
  try {
    res.json(await getImage());
  } catch (err: any) {
    console.error(`Error while getting image`, err.message);
    next(err);
  }
});

/* POST image */
imageRouter.post("/", async (req, res, next) => {
  try {
    res.json(await addImage(req.body));
  } catch (err: any) {
    console.error(`Error while creating image object`, err.message);
    next(err);
  }
});

export { imageRouter };
