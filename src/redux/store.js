import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger)
  middlewares.push(thunk)
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)