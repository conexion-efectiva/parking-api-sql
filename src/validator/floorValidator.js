const joi = require('joi')

const FloorSchema = joi.object({
  name:joi.string().required(),
  code: joi.number().required(),
  description: joi.string().required(),
  spotsQty: joi.number().required(),
})

module.exports = { FloorSchema }
