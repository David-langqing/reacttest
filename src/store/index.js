import { createStore, applyMiddleware } from 'redux'
import Immutable from 'immutable'

import thunk from 'redux-thunk';
import reduers from './reducers'

const initialState = Immutable.Map();
const store = createStore(reduers,initialState,applyMiddleware(thunk))

export default store