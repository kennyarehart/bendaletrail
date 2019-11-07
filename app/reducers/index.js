import { ADD_POST, DELETE_POST, FETCH_API, TOGGLE_VISIT } from '../actions'

export default function postReducer(state = {}, action) {
	console.log('| state:', state, '| action:', action)
	switch (action.type) {
		// case ADD_POST:
		// 	return [...state, action.payload]
		// case DELETE_POST:
		// 	return state.filter(post => post._id !== action.payload.id)
		case FETCH_API:
			return action
		case TOGGLE_VISIT:
			return state // [state, action.payload]
		default:
			return state
	}
}
