const TicketService = require('../services/TicketService')

/**
 * @type TicketController
 */

let instance = null

class TicketController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async getList(req, res) {
    const ticket = await TicketService.getInstance().list()
    res.json(ticket)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async getOne(req, res) {
    const ticket = await TicketService.getInstance().get(req.params.id)
    if (ticket == null) {
      res.status(404).json({ message: 'ID no encontrado' })
      return
    }

    res.json(ticket)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  async put(req, res) {
    const existTicket = await TicketService.getInstance().get(req.params.id)
    if (existTicket == null) {
      res.status(404).json({ message: 'ID no encontrado' })
      return
    }
    let ticket = { ...req.body, _id: req.params.id }
    ticket = await TicketService.getInstance().update(ticket)
    res.json(ticket)
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async delete(req, res) {
    const existTicket = await TicketService.getInstance().get(req.params.id)
    if (existTicket == null) {
      res.status(404).json({ message: 'ID no encontrado' })
      return
    }
    await TicketService.getInstance().delete(req.params.id)
    res.json(existTicket)
  }
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

  async post(req, res) {
    const ticket = await TicketService.getInstance().insert(req.body)
    res.json(ticket)
  }

  static getInstance() {
    if (instance == null) {
      instance = new TicketController()
    }

    return instance
  }
}

module.exports = TicketController
