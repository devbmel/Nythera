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
}

export default BeastsService;
