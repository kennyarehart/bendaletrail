import React from 'react'

export default function ListItem({ title, placeId }) {
	// console.log(title, placeId)
	return (
		<li>
			<input type="checkbox" id={placeId} />
			<label>{title}</label>
		</li>
	)
}
