import {createStore,applyMiddleware,combineReducers} from 'redux'
import Thunk from 'redux-thunk'
import Logger, { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk,logger))


export default store