import { combineReducers } from 'redux'
import { FETCH_API, TOGGLE_VISIT } from '../actions'

const defaultState = {
	list: [],
	apikey: null
}

function apiData(state = defaultState, action) {
	// console.log('| state:', state, '| action:', action)
	switch (action.type) {
		case FETCH_API:
			return action.apiData
		// 	return [...state,  list: action.list, apikey: action.apikey }
		default:
			return state
	}
}

const defaultPlace = {
	placeId: null,
	visited: false
}

function apiPlace(state = defaultPlace, action) {
	console.log('||| state:', state, '| action:', action)
	switch (action.type) {
		case TOGGLE_VISIT:
			return action.apiPlace
		default:
			return state
	}
}

export default combineReducers({ apiData, apiPlace })
