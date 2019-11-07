import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'

function TheMap({ apiData }) {
	console.log(':: The Map ::', apiData)
	if (!apiData.apikey) {
		return <div>No API Key</div>
	}
	return <Map list={apiData.list} apikey={apiData.apikey} />
}

const mapStateToProps = state => {
	return {
		apiData: state.apiData
	}
}

export default connect(
	mapStateToProps,
	null
)(TheMap)
