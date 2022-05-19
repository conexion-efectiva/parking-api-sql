const floorModel = require('../persistence/FloorModel')

/**
 * @type FloorService
 */

let instance = null

class FloorService {
  async get(id) {
    return await floorModel.find({ _id: id })
  }

  async list() {
    return await floorModel.find()
  }

  async update(floor) {
    await floorModel.updateOne({ _id: floor._id }, floor)
    return floor
  }

  async insert(floor) {
    const result = await floorModel.create(floor)
    return result.toObject()
  }

  async delete(id) {
    return await floorModel.deleteOne({ _id: id })
  }

  static getInstance() {
    if (instance == null) {
      instance = new FloorService()
    }

    return instance
  }
}

module.exports = FloorService
