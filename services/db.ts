import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const dbHostname = process.env.DB_HOSTNAME || "";
const dbName = process.env.DB_NAME || "";
const dbUsername = process.env.DB_USERNAME || "";
const dbPassword = process.env.DB_PASSWORD || "";

const config = {
  host: dbHostname,
  user: dbUsername,
  password: dbPassword,
  database: dbName,
};

const query = async (sql: string, params?: string) => {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(sql, params);
  await connection.end();

  return results;
};

export { query };
