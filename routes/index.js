const router = require('express').Router()

router.use('/api', require('./postRoutes.js'))

module.exports = router
