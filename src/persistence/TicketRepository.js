const config = require('./databaseConfig')
const knex = require('knex').knex(config)

let instance = null

class TicketRepository {
  async getById(ticketId) {
    return knex
      .select('ticketId', 'startDate', 'endDate', 'spotNumber')
      .from('ticket')
      .where({
        ticketId: ticketId,
      })
      .first()
  }

  async list() {
    return knex.select('ticketId', 'startDate', 'endDate', 'spotNumber')
               .from('ticket')
  }

  async insert(ticket) {
    const ids = await knex('ticket').insert(ticket)
    ticket.ticketId = ids[0]
    return ticket
  }

  async update(ticket) {
    return await knex('ticket')
      .where({
        ticketId: ticket.ticketId,
      })
      .update(ticket)
  }
// esta mal escrito delete
  async detele(ticketId) {
    return await knex('ticket')
      .where({
        ticketId: ticketId,
      })
      .del()
  }

  /**
   *
   * @returns {TicketRepository}
   */
  static getInstance() {
    if (instance == null) {
      instance = new TicketRepository()
    }

    return instance
  }
}
module.exports = TicketRepository
