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
			list: results.sort((a, b) => {
				if (a.title < b.title) return -1
				if (a.title > b.title) return 1
				return 0
			})
		}
		places.apikey = process.env.GOOGLE_MAPS_KEY
		res.json(places)
		// console.log('Sent list of places json')
	})
})

router.post('/toggle', (req, res, next) => {
	console.log('req:', req.body)

	connection.query(
		'UPDATE `places` SET `visited` = ? WHERE `placeId` = ?',
		[req.body.visited ? 1 : 0, req.body.placeId],
		(err, results, fields) => {
			if (err) {
				res.send('ERROR')
			}
			// console.log(results)

			res.send(req.body)
		}
	)
})

module.exports = router
