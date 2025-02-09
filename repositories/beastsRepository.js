import mariadb from "mariadb";
import "dotenv/config";

class BeastsRepository {
  constructor() {
    this.pool = mariadb.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      port: process.env.DB_PORT,
      connectionLimit: 5,
    });
  }

  async getBeasts() {
    let connexion;
    try {
      connexion = await this.pool.getConnection();

      return await connexion.query("SELECT * FROM Beasts");
    } catch (error) {
      const message = `Error in getIBeast: ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }

  async getBeastById(id) {
    let connexion;
    try {
      connexion = await this.pool.getConnection();
      return await connexion.query("SELECT * FROM Beasts WHERE id = ?", [id]);
    } catch (error) {
      const message = `Error in getBeastById with id = ${id} : ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }
}

export default BeastsRepository;
