import { S3Client, GetObjectCommand, S3ClientConfig } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const getImage = async () => {
  const s3Configuration: S3ClientConfig = {
    credentials: {
      accessKeyId: "<ACCESS_KEY_ID>",
      secretAccessKey: "<SECRET_ACCESS_KEY>",
    },
    region: "<REGION>",
  };
  const s3 = new S3Client(s3Configuration);
  const command = new GetObjectCommand({ Bucket: "<BUCKET>", Key: "<KEY>" });
  const url = await getSignedUrl(s3, command, { expiresIn: 15 * 60 }); // expires in seconds

  return { image: url };
};

export { getImage };
