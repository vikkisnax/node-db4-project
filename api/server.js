const express = require('express')
const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

//catch all
server.use('*', (req,res) =>{
    res.json({api: 'up'})
})
module.exports = server