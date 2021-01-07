const router = require('express').Router()
const { Post } = require('../models')


router.get('/posts', (req, res) => {
  Post.find()
    .then(Post => res.json(Post))
    .catch(err => console.log(err))
})

router.post('/posts', (req, res) => {
  Post.create(req.body)
    .then(Post => res.json(Post))
    .catch(err => console.log(err))
})

router.put('/posts/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set:req.body })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

router.delete('/items/id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

module.exports = router