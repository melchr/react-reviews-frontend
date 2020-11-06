import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reviews from './reducers/reviewReducer'
import newReviewForm from './reducers/newReviewForm'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    reviews,
    newReviewForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

  export default store