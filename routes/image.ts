import express from "express";
import multer from "multer";
import { addImage, getImage } from "../services";

const imageRouter = express.Router();

/* GET single image. */
imageRouter.get("/:imageId", async (req, res, next) => {
  try {
    res.json(await getImage(req.params.imageId));
  } catch (err: any) {
    console.error(`Error while getting image`, err.message);
    next(err);
  }
});

/* POST image */
imageRouter.post("/", multer().single("image"), async (req, res, next) => {
  try {
    if (req.file) {
      return res.json(await addImage(req.file, req.body));
    }

    throw new Error("file not provided");
  } catch (err: any) {
    console.error(`Error while creating image object`, err.message);
    next(err);
  }
});

export { imageRouter };
