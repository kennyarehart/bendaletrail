import React from 'react'
import { getPlace } from './utils'

function Tag({ data, map }) {
	function handleClick(e) {
		e.preventDefault()
		console.log('click:', data.title)
		getPlace(map, data.title).then(val => {
			console.log(val[0], val[1], data)
		})
	}
	return <div className="label" onClick={handleClick}></div>
}

export default Tag
