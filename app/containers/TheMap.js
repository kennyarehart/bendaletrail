import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'

function TheMap({ apiData, apiPlace }) {
	console.log(':: The Map ::', apiData, apiPlace)
	if (!apiData.apikey) {
		return <div>No API Key</div>
	}
	return <Map list={apiData.list} apikey={apiData.apikey} apiPlace={apiPlace} />
}

const mapStateToProps = state => {
	console.log('TheMap > mapStateToProps() > state:', state)
	return {
		apiData: state.apiData,
		apiPlace: state.apiPlace
	}
}

export default connect(
	mapStateToProps,
	null
)(TheMap)
