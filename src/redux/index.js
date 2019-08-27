import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counts from './reducers/count.js'
import states from './reducers/states.js'

const reducers = combineReducers({ counts, states })
const store = createStore(reducers, applyMiddleware(thunk))

export default store
