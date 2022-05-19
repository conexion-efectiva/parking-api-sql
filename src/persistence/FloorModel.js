const moongose = require('mongoose')

const floorSchema = moongose.Schema({
  code: Number,
  description: String,
  spotsQty: Number,
})

const floorModel = moongose.model('floor', floorSchema)

module.exports = floorModel
