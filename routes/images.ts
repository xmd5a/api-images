import express from "express";
import { getImages } from "../services";

const imagesRouter = express.Router();

/* GET images. */
imagesRouter.get("/", async (req, res, next) => {
  try {
    res.json(await getImages());
  } catch (err: any) {
    console.error(`Error while getting images`, err.message);
    next(err);
  }
});

export { imagesRouter };
