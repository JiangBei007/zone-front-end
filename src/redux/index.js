import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import init from './reducers/init.js'
import data from './reducers/data.js'



const reducers = combineReducers({init,data})

export default createStore(reducers,applyMiddleware(thunk))
