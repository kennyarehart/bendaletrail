import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import { fetchAllPosts } from './actions/index'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchAllPosts())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
