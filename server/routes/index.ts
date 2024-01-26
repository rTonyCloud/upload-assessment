const test = require('./test');
const express = require('express')
const router = express.Router()

router.use('/test', test)

module.exports = router
