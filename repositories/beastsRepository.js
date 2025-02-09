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
      const beast = await connexion.query("SELECT * FROM Beasts WHERE id = ?", [
        id,
      ]);
      return beast[0];
    } catch (error) {
      const message = `Error in getBeastById with id = ${id} : ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }

  async updateBeastById(id, beast) {
    let connexion;
    try {
      connexion = await this.pool.getConnection();
      await connexion.query(
        `UPDATE beasts SET name = ?, beast_level = ?, happiness = ?, energy = ?, birthdate = ?, date_last_levelup = ?, beast_type = ?, sex = ?, mood = ?, diet = ?, species = ?
                WHERE id =?
                `,
        [
          beast.name,
          beast.beast_level,
          beast.happiness,
          beast.energy,
          beast.birthdate,
          beast.date_last_levelup,
          beast.beast_type,
          beast.sex,
          beast.mood,
          beast.diet,
          beast.species,
          id,
        ]
      );
      return this.getBeastById(id);
    } catch (error) {
      const message = `Error in uptadeBeastById : ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }
}

export default BeastsRepository;
