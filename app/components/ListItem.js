import React from 'react'

export default function ListItem({ title, placeId, visited }) {
	// console.log(title, placeId, visited)
	return (
		<li>
			<input type="checkbox" id={placeId} defaultChecked={visited} />
			<label>{title}</label>
		</li>
	)
}
