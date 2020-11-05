import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reviews from './reducers/reviewReducer'

const reducers = combineReducers({
    reviews
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

  export default store