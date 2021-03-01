import {
	TRANSACTION_LIST_REQUEST,
	TRANSACTION_LIST_SUCCESS,
	TRANSACTION_LIST_FAIL,
	TRANSACTION_ADD_REQUEST,
	TRANSACTION_ADD_SUCCESS,
	TRANSACTION_ADD_FAIL,
	TRANSACTION_ADD_RESET,
} from '../constants/transactionConstants'

export const transactionListReducer = (
	state = { transactions: [] },
	action,
) => {
	switch (action.type) {
		case TRANSACTION_LIST_REQUEST:
			return {
				loading: true,
				transactions: [],
			}
		case TRANSACTION_LIST_SUCCESS:
			return {
				loading: false,
				transactions: action.payload,
			}
		case TRANSACTION_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export const transactionAddReducer = (state = {}, action) => {
	switch (action.type) {
		case TRANSACTION_ADD_REQUEST:
			return { loading: true }
		//
		case TRANSACTION_ADD_SUCCESS:
			return { loading: false, success: true, transaction: action.payload }
		//
		case TRANSACTION_ADD_FAIL:
			return { loading: false, error: action.payload }
		//
		case TRANSACTION_ADD_RESET:
			return {}
		default:
			return state
	}
}
