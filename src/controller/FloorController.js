const FloorService = require('../services/FloorService')

/**
 * @type FloorController
 */

let instance = null

class FloorController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getList(req, res) {
    const floor = await FloorService.getInstance().list()
    res.json(floor)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getOne(req, res) {
    const floor = await FloorService.getInstance().get(req.params.id)

    if (floor == null) {
      res.status(404).json({ message: 'ID no encontrado' })
      return
    }

    res.json(floor)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async put(req, res) {
    const existFloor = await FloorService.getInstance().get(req.params.id)
    if (existFloor == null) {
      res.status(404).json({ message: 'Not found' })
    }
    let floor = { ...req.body, _id: req.params.id }
    floor = await FloorService.getInstance().update(floor)
    res.json(floor)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async delete(req, res) {
    const existFloor = await FloorService.getInstance().get(req.params.id)
    if (existFloor == null) {
      res.status(404).json({ message: 'Not found' })
    }
    await FloorService.getInstance().delete(req.params.id)
    res.json(existFloor)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async post(req, res) {
    const floor = await FloorService.getInstance().insert(req.body)
    res.json(floor)
  }

  static getInstance() {
    if (instance == null) {
      instance = new FloorController()
    }

    return instance
  }
}

module.exports = FloorController
