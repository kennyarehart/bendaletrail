import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'

function TheMap({ list, apikey }) {
	if (!apikey) {
		return <div>No API Key</div>
	}
	return <Map list={list} apikey={apikey} />
}

const mapStateToProps = state => {
	return {
		apikey: state.apikey,
		list: state.list
	}
}

export default connect(
	mapStateToProps,
	null
)(TheMap)
