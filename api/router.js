const express = require('express')
const db = require('./../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db('foam')
    .then((images) => {
        res.status(200).json(images)
    })
    .catch(err => {
        res.status(500).json({message:'failed to load images'})
    }) 
    // Projects.get()
    // .then(projects => res.json(projects))
    // .catch(next)
})

router.get('/id', (req, res, next) => {
    db('foam')
    .where('id', req.params.id)
    .then((image) => {
        res.status(200).json(image)
    })    
    .catch(err => {
        res.status(500).json({message:'failed to load image'})
    })
})

router.put('/:id', (req, res, next) => {
    db('foam')
    .where('id', req.params.id)
    .update(req.body)
    .then((result) => {
        if (result > 0) {
            const updated = router.get(req.params.id)
            res.status(201).json(updated)
        } else {
            res.status(500).json({message:'failed to update'})
        }
    });
})

// router.use((err, req, res, next) => {
//     //console.log(err.message)
//     res.status(err.status || 500).json({message: err.message})
// })

module.exports = router