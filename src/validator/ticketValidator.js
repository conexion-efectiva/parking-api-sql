const joi = require('joi')

const TicketSchema = joi.object({
  startDate: joi.string().required(),
  endDate: joi.string().required(),
  spotNumber: joi.number().required(),
})

module.exports = { TicketSchema }
