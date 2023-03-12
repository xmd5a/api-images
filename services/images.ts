import { query } from "./db";
import {
  S3Client,
  GetObjectCommand,
  S3ClientConfig,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

type ImagePayload = {
  title: string;
  image: Express.Multer.File;
};

const bucketName = process.env.BUCKET_NAME || "";
const s3Region = process.env.S3_REGION || "";

const s3Configuration: S3ClientConfig = {
  region: s3Region,
};
const s3client = new S3Client(s3Configuration);

const getImages = async () => {
  const data = await query("SELECT * from images");

  return data;
};

const getImage = async (imageId: string) => {
  const data = await query("SELECT * from images");

  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: imageId,
  });
  const url = await getSignedUrl(s3client, command, { expiresIn: 15 * 60 });

  return { image: url };
};

const addImage = async (
  image: ImagePayload["image"],
  { title }: ImagePayload
) => {
  const imageObject: PutObjectCommandInput = {
    Bucket: bucketName,
    Key: title,
    Body: image.buffer,
  };
  const uploader = new Upload({ client: s3client, params: imageObject });
  const data = await uploader.done();
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
