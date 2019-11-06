const express = require('express')
const router = express.Router()
const places = require('../data/saved_places.json')

router.get('/api', (req, res, next) => {
	res.json(places)
	console.log('Sent list of places json')
})

module.exports = router
