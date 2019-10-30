const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { tech } = req.query

    const spots = await (tech ? Spot.find({ techs: tech }) : Spot.find())

    return res.json(spots)
  },

  async store(req, res) {
    const { filename } = req.file
    const { company, techs, price, nota } = req.body
    const { user_id } = req.headers

    const user = await User.findById(user_id)

    if (!user) {
      return res.status(400).json({
        error: 'Invalid user'
      })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price,
      nota
    })
    return res.json(spot)
  }
}