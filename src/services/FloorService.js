const floorModel = require('../persistence/FloorRepository')

/**
 * @type FloorService
 */

let instance = null

class FloorService {
  async get(id) {
    return await floorModel.getInstance().getById(id)
  }

  async list() {
    return await floorModel.getInstance().list()
  }

  async update(floor) {
    await floorModel.getInstance().update(floor)
    return floor
  }

  async insert(floor) {
    await floorModel.getInstance().insert(floor)
    return floor
  }

  async delete(id) {
    return await floorModel.getInstance().delete(id)}

  static getInstance() {
    if (instance == null) {
      instance = new FloorService()
    }

    return instance
  }
}

module.exports = FloorService
