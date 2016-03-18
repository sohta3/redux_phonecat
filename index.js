import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import Root from './components/Root'
import {phones, phone} from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({phones, phone}), {phones: {processedPhones: []}}, applyMiddleware(thunkMiddleware, createLogger()))
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
  <Provider  store={store}>
    <Root/>
  </Provider>,
    rootEl
  )
}

render()
