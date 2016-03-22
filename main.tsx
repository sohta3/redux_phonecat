/// <reference path='./typings/tsd.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Root from './components/Root'
import * as Reducers from './reducers/index'

const store = createStore(combineReducers({phones: Reducers.phones, phone: Reducers.phone}), {phones: {processedPhones: []}}, applyMiddleware(thunkMiddleware, createLogger()))
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
