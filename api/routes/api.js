const express = require('express')
const router = express.Router()
const places = require('../data/saved_places.json')
const apikey = require('../key/api_key')

router.get('/api', (req, res, next) => {
	places.apikey = apikey.GOOGLE_MAPS_KEY
	res.json(places)
	console.log('Sent list of places json')
})

router.post('/toggle', (req, res, next) => {
	console.log('req:', req.body)
	res.send(req.body)
})

module.exports = router
