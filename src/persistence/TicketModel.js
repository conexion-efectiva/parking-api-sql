const moongose = require('mongoose')

const ticketSchema = moongose.Schema({
  startDate: String,
  endDate: String,
  spotNumber: Number,
})

const ticketModel = moongose.model('ticket', ticketSchema)
module.exports = ticketModel
