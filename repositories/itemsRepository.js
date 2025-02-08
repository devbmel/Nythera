import mariadb from "mariadb";
import dotenv from "dotenv";

dotenv.config();

class ItemsRepository {
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

  async getItemsByType(itemType) {
    let connexion;
    try {
      connexion = await this.pool.getConnection();
      const items = await connexion.query(
        "SELECT * FROM items WHERE item_type = ?",
        [itemType]
      );
      return items;
    } catch (error) {
      const message = `Error in getItemByType with type = ${itemType} : ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }
}

export default ItemsRepository;
