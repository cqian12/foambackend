require('dotenv').config()

import express from 'express'

const server = express()
const port = process.env.PORT

server.get('/', (req, res) => {
    res.json('running')
})

server.listen(port, () => {
    console.log('running on port '& port)
})