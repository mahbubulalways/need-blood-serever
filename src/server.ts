/* eslint-disable @typescript-eslint/no-explicit-any */
import config from './config';
const port = config.PORT || 5000;
import mysql from 'mysql2/promise';
import app from './app';

// async function DBConnect(sql: string, params: any): Promise<any> {
//   try {
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'needBlood',
//     });
//     const [results] = await connection.execute(sql, params);
//     return results;
//   } catch (error) {
//     console.error('Database query error:', error);
//   }
// }

async function DBConnect(sql: string, params: any): Promise<any> {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'needBlood',
    });
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error; // rethrow the error after logging it
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

async function startServer() {
  try {
    await DBConnect('SELECT 1', []);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();

export default DBConnect;

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'needBlood',
});
