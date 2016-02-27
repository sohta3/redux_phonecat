import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Phonecat from './components/Phonecat'
import counter from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


/*
const phones = [
  {'name': 'Nexus S',
    'snippet': 'Fast just got faster with Nexus S.',
    'visible': true,
    'age': 1},
  {'name': 'Motorola XOOM™ with Wi-Fi',
    'snippet': 'The Next,  Next Generation tablet.',
    'visible': true,
    'age': 2},
  {'name': 'MOTOROLA XOOM™',
    'snippet': 'The Next,  Next Generation tablet.',
    'visible': true,
    'age': 3}
];
*/

const store = createStore(counter, {processedPhones: []}, applyMiddleware(thunkMiddleware, createLogger()))
const rootEl = document.getElementById('root')

function render() {
  console.log('=================================================================')
  console.log(store.getState())
  ReactDOM.render(
    <Phonecat
      dispatch={store.dispatch}
      states={store.getState()}
      onQueryChange={(action) => store.dispatch(action)}
      onOrderChange={(action) => store.dispatch(action)}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
