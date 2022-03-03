require('dotenv').config()

const server = require('./api/server')
const port = process.env.PORT || 3000

server.listen(port, (req, res) => {
    console.log(`running on port ${port}`)
})