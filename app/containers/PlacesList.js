import React from 'react'
import { connect } from 'react-redux'
import { togglePlace } from '../actions'
import ListItem from '../components/ListItem'

function PlacesList({ list, onToggle }) {
	if (!list) {
		return <div>No Posts</div>
	}

	function handleChange(event) {
		// event.preventDefault()
		console.log(event.target.id)
		onToggle(event.target.id)
	}

	return (
		<div id="info-panel">
			<form onChange={handleChange}>
				<ul>
					{list.map((item, i) => (
						<ListItem key={i} {...item} />
					))}
				</ul>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
	console.log('PlacesList > mapStateToProps() > state:', state)
	return {
		list: state.list
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onToggle: id => {
			dispatch(togglePlace(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlacesList)
