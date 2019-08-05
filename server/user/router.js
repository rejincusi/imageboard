const { Router } = require('express')
const bcrypt = require('bcrypt')
const router = new Router()
const User = require('./model')

router.post('/user', ( req, res, next ) => {
  console.log('email', req.body.email)
  console.log('password', req.body.password)
  if (!req.body.password) {
    res.json( 'jjjjjjj' )
    return "err"
    }
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
 // console.log('user',user)
  User
    .create(user)
    .then( userResponse => res.json( userResponse ))
    .catch(next)
})

module.exports = router