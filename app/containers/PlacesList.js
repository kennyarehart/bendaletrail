import React from 'react'
import { connect } from 'react-redux'
import { togglePlace } from '../actions'
import ListItem from '../components/ListItem'

function PlacesList({ apiData, onToggle }) {
	console.log(':: PlacesList ::', apiData)
	if (!apiData.list.length) {
		return <div>No Posts</div>
	}

	function handleChange(event) {
		console.log(event.target.id)
		onToggle(event.target.id)
	}

	return (
		<div id="info-panel">
			<form onChange={handleChange}>
				<ul>
					{apiData.list.map((item, i) => (
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
		apiData: state.apiData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onToggle: id => {
			console.log('dispatch onToggle()')
			dispatch(togglePlace(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlacesList)
