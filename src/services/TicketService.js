const ticketModel = require('../persistence/TicketModel')
/**
 * @type TicketService
 */
let instance = null
class TicketService {
  async get(id) {
    return await ticketModel.find({ _id: id })
  }

  async list() {
    return await ticketModel.find()
  }

  async update(ticket) {
    await ticketModel.updateOne({ _id: ticket._id }, ticket)
    return ticket
  }

  async insert(ticket) {
    const result = await ticketModel.create(ticket)
    return result.toObject()
  }

  async delete(id) {
    return await ticketModel.deleteOne({ _id: id })
  }

  static getInstance() {
    if (instance == null) {
      instance = new TicketService()
    }

    return instance
  }
}
module.exports = TicketService
