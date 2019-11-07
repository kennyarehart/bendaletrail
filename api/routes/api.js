const express = require('express')
const router = express.Router()
const places = require('../data/saved_places.json')
// const apikey = require('../key/api_key')

const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PW,
	database: process.env.DB
})

router.get('/api', (req, res, next) => {
	connection.query('SELECT * FROM `apikeys`', function(err, results, fields) {
		if (err || !results.length) {
			res.send('ERROR')
		}
		places.apikey = results[0].val
		// places.apikey = apikey.GOOGLE_MAPS_KEY
		res.json(places)
		console.log('Sent list of places json')
	})
})

router.post('/toggle', (req, res, next) => {
	console.log('req:', req.body)
	res.send(req.body)
})

module.exports = router
