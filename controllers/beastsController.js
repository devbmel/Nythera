import BeastsService from "../services/beastsService.js";

class BeastsController {
  constructor() {
    this.beastsService = new BeastsService();
  }

  async getBeasts(req, res) {
    try {
      const beasts = await this.beastsService.getBeasts();
      res.status(200).json({ beasts });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getBeastById(req, res) {
    const { id } = req.params;
    try {
      const beast = await this.beastsService.getBeastById(id);
      res.status(200).json({ beast });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default BeastsController;
