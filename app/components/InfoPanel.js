import React, { useEffect, useState } from 'react'

export default function InfoPanel(props) {
	const [places, setPlaces] = useState([])
	useEffect(() => {
		console.log('Panel:', props)
		const pool = props.places.map((item, i) => {
			return <ListItem title={item.title} key={i} />
		})
		setPlaces(pool)
	}, [])

	function handleSubmit(event) {
		event.preventDefault()
	}

	function handleChange(event) {
		event.persist()
		console.log('handleChange', event.target, event.currentTarget)
	}

	return (
		<div id="info-panel">
			Here's the panel
			<form onSubmit={handleSubmit} onChange={handleChange}>
				<ul>{places}</ul>
			</form>
		</div>
	)
}

function ListItem({ title }) {
	console.log(title)
	return (
		<li>
			<input type="checkbox" />
			<label>{title}</label>
		</li>
	)
}
