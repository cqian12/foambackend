const express = require('express')
//const Images = require('tbd')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('hit get endpoint')
    // Projects.get()
    // .then(projects => res.json(projects))
    // .catch(next)
})

module.exports = router