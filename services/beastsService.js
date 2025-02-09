import BeastsRepository from "../repositories/beastsRepository.js";

class BeastsService {
  constructor() {
    this.beastRepository = new BeastsRepository();
  }

  async getBeasts() {
    try {
      return await this.beastRepository.getBeasts();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getBeastById(id) {
    try {
      return await this.beastRepository.getBeastById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async feedBeastById(id, item) {
    try {
      const beast = await this.getBeastById(id);

      beast.energy = Math.min(beast.energy + item.energy, 100);
      beast.happiness = Math.min(beast.happiness + item.happiness, 100);

      return await this.beastRepository.updateBeastById(id, beast);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default BeastsService;
