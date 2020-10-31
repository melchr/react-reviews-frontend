import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = () => {

}

export default createStore(rootReducer, applyMiddleware)