import ItemsService from "../services/itemsService.js";

class ItemsController {
  constructor() {
    this.itemsService = new ItemsService();
  }

  async getItemsByType(req, res) {
    const { itemType } = req.params;
    try {
      const item = await this.itemsService.getItemsByType(itemType);
      res.status(200).json({ item });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getRandomItemByType(res, itemType) {
    try {
      const item = await this.itemsService.getRandomItemByType(itemType);
      res.status(200).json({ item });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default ItemsController;
