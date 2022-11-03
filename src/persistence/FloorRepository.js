const config = require('./databaseConfig')
const knex = require('knex').knex(config)

let instance = null

class FloorRepository {
  async getById(floorId) {
    return knex
      .select('floorId', 'name', 'code ', 'description', 'spotsqty')
      .from('floor')
      .where({
        floorId: floorId,
      })
      .first()
  }

  async list() {
    return knex.select('floorId', 'name', 'code ', 'description', 'spotsqty')
                .from('floor')
  }

  async insert(floor) {
    const ids = await knex('floor').insert(floor)
    floor.florId = ids[0]
    return floor
  }

  async update(floor) {
    return await knex('floor')
      .where({
        floorId: floor.floorId,
      })
      .update(floor)
  }

  async delete(floorId) {
    return await knex('floor')
      .where({
        floorId: floorId,
      })
      .del()
  }

  /**
   *
   * @returns {FloorRepository}
   */
  static getInstance() {
    if (instance == null) {
      instance = new FloorRepository()
    }

    return instance
  }
}

module.exports = FloorRepository
