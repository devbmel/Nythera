import ItemsRepository from "../repositories/itemsRepository.js";
import InventoryRepository from "../repositories/inventoryRepository.js";

class ItemsService {
  constructor() {
    this.itemsRepository = new ItemsRepository();
    this.inventoryRepository = new InventoryRepository();
  }

  async getItemsByType(itemType) {
    try {
      return await this.itemsRepository.getItemsByType(itemType);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRandomItemByType(itemType) {
    // Récuperer les items pour un type particulier (itemType)
    const items = await this.getItemsByType(itemType);

    //Selection un item au hasard
    const item = items[Math.floor(Math.random() * items.length)];
    //Ajouter a la base inventory l'item
    await this.inventoryRepository.addInventory(item);

    return item;
  }
}

export default ItemsService;
