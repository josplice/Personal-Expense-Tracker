import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	transactionListReducer,
	transactionAddReducer,
} from './reducers/transactionListReducers'

const reducer = combineReducers({
	transactionList: transactionListReducer,
	transactionAdd: transactionAddReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
