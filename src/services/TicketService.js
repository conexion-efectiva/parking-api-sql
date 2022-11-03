const ticketModel = require('../persistence/TicketRepository')
/**
 * @type TicketService
 */
let instance = null
class TicketService {
  async get(id) {
    return await ticketModel.getInstance().getById(id)
  }

  async list() {
    return await ticketModel.getInstance().list()
  }

  async update(ticket) {
    await ticketModel.getInstance().update(ticket)
    return ticket
  }

  async insert(ticket) {
    await ticketModel.getInstance().insert(ticket)
    return ticket
  }

  async delete(id) {
    return await ticketModel.getInstance().detele(id)
  }

  static getInstance() {
    if (instance == null) {
      instance = new TicketService()
    }

    return instance
  }
}
module.exports = TicketService
