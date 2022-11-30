import { query } from "./db";

type ImagePayload = {
  title: string;
  image: string;
};

const getImages = async () => {
  const data = await query("SELECT * from images");

  return data;
};

const getImage = async () => {
  const data = await query("SELECT * from images");

  return data;
};

const addImage = async ({ title, image }: ImagePayload) => {
  const result = await query(
    `INSERT INTO images (title, image) VALUES ('${title}', '${image}')`
  );

  let message = "Error in creating image";

  if (result) {
    message = "Image created successfully";
  }

  return { message };
};

export { addImage, getImages, getImage };
