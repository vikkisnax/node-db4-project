const knex = require('knex')

//environment's obj comes from the knexfile 
const configs = require('../knexfile.js')

//which environment to use. if we get rid of ||development, make sure to put it in .env file 
const environment = process.env.NODE_ENV || 'development'

module.exports = knex(configs[environment])