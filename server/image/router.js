const { Router } = require('express')
const Image = require('../image/model')
const router = new Router()
const auth = require('../auth/middleware')

router.get('/image', ( req, res, next ) => {
  Image
    .findAll()
    .then( imageResponse => res.json( imageResponse ))
    .catch(next)
})

router.post('/image', auth, ( req, res, next ) => {
  Image
    .create(req.body)
    .then( imageResponse => res.json( imageResponse ))
    .catch(next)
})

module.exports = router