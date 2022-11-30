import mysql from "mysql2/promise";

const database = process.env.DB || "";

const query = async (sql: string, params?: string) => {
  const connection = await mysql.createConnection(database);
  const [results] = await connection.execute(sql, params);
  await connection.end();

  return results;
};

export { query };
