import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initalState = {}

const middlware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(..middleware)
)

export default store