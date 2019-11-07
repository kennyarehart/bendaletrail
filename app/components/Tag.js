import React from 'react'
import { getPlace } from '../actions'
import kylo_tag from '../images/kylo_tag.png'
import kevork_tag from '../images/kevork_tag.png'

function Tag({ data, map, apiPlace }) {
	if (apiPlace.placeId === data.placeId) {
		data.visited = apiPlace.visited
	}

	function handleClick(e) {
		e.preventDefault()
		console.log('click:', data.title)
		getPlace(map, data).then(val => {
			console.log(val[0], val[1], data)
		})
	}

	return (
		<div className={(data.visited ? 'visited ' : '') + 'tag'} onClick={handleClick}>
			<img src={data.visited ? kevork_tag : kylo_tag} />
		</div>
	)
}

export default Tag
