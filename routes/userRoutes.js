const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

router.post('/users', (req,res) => {
  User.create(req.body)
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

router.put('/users/:id', (req, res) => {
  User.findBy
})