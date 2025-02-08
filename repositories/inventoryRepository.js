import mariadb from "mariadb";
import "dotenv/config";

class InventoryRepository {
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

  async addInventory(item) {
    let connexion;
    try {
      connexion = await this.pool.getConnection();

      await connexion.query(
        "INSERT INTO Inventory (id_item) VALUES (?)",
        item.id
      );
    } catch (error) {
      const message = `Error in addInventory with item = ${item} : ${error.message}`;
      console.error(message);
      throw new Error(message);
    } finally {
      if (connexion) connexion.release();
    }
  }
}

export default InventoryRepository;
