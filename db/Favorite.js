const Sequelize = require('sequelize')
const conn = require('./conn')

const Favorite = conn.define('favorite', {
    Ranked: Sequelize.INTEGER
})

module.exports = Favorite;