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
      throw new Error({ error: message.error });
    }
  }
}

export default BeastsController;
