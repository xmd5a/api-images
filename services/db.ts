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

const provisionSql =
  "CREATE TABLE IF NOT EXISTS images(id integer PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL);";

const query = async (sql: string, params?: string) => {
  const connection = await mysql.createConnection(config);
  await connection.execute(provisionSql);
  const [results] = await connection.execute(sql, params);
  await connection.end();

  return results;
};

export { query };
