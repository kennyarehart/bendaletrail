import React, { useState } from 'react'
import { connect } from 'react-redux'
import { togglePlace } from '../actions'
import ListItem from '../components/ListItem'

function PlacesList({ apiData, onToggle }) {
	console.log(':: PlacesList ::', apiData)
	if (!apiData.list.length) {
		return <div>No Posts</div>
	}

	const [showing, setShowing] = useState(false)

	function handleChange(event) {
		onToggle(event.target.id, event.target.checked)
	}

	function handleClick(event) {
		setShowing(!showing)
	}

	return (
		<div id="info-panel" className={showing ? 'info-panel-show' : ''}>
			<div>
				<button onClick={handleClick}>{showing ? 'X' : '>'}</button>
			</div>
			<form onChange={handleChange} className={showing ? '' : 'nope'}>
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
		onToggle: (id, isChecked) => {
			console.log('dispatch onToggle()')
			dispatch(togglePlace(id, isChecked))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlacesList)
