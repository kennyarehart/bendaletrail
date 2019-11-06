import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SimpleMap from './SimpleMap'

import { combineReducers, createStore } from 'redux'

class App extends React.Component {
	render() {
		return <div></div>
		// <SimpleMap></SimpleMap>
	}
}

function productsReducer(state = [], action) {
	return state
}

function userReducer(state = '', action) {
	switch (action.type) {
		case 'updateUser':
			return action.payload
	}
	return state
}

const all = combineReducers({
	products: productsReducer,
	user: userReducer
})

const store = createStore(
	all,
	{
		products: [{ name: 'iphone' }],
		user: 'Me'
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState())

const updateUserAction = {
	type: 'updateUser',
	payload: {
		user: 'bro'
	}
}
store.dispatch(updateUserAction)

ReactDOM.render(<App />, document.getElementById('app'))
