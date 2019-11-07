// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import SimpleMap from './components/SimpleMap'

// ReactDOM.render(<SimpleMap />, document.getElementById('root'))

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './reducers'
import App from './components/App'
const store = createStore(reducer, applyMiddleware(thunk, logger))
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
