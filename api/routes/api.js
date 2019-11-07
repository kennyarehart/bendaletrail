const express = require('express')
const router = express.Router()

const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql')

// create the connection to database
const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PW,
	database: process.env.DB
})

router.get('/api', (req, res, next) => {
	connection.query('SELECT * FROM `places`', function(err, results, fields) {
		if (err || !results.length) {
			res.send('ERROR')
		}
		// places.apikey = results[0].val
		let places = {
			list: results
		}
		places.apikey = process.env.GOOGLE_MAPS_KEY
		res.json(places)
		// console.log('Sent list of places json')
	})
})

router.post('/toggle', (req, res, next) => {
	console.log('req:', req.body)

	connection.query('UPDATE `places` SET `visited` = 1 WHERE `placeId` = ?', [req.body.placeId], (err, results, fields) => {
		if (err) {
			res.send('ERROR')
		}

		console.log(results)
		console.log(fields)

		res.send(req.body)
	})
})

module.exports = router
