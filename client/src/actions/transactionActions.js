import {
	TRANSACTION_LIST_REQUEST,
	TRANSACTION_LIST_SUCCESS,
	TRANSACTION_LIST_FAIL,
	TRANSACTION_ADD_REQUEST,
	TRANSACTION_ADD_SUCCESS,
	TRANSACTION_ADD_FAIL,
} from '../constants/transactionConstants'

import axios from 'axios'

export const listTransactions = () => async (dispatch) => {
	try {
		dispatch({
			type: TRANSACTION_LIST_REQUEST,
		})

		const res = await axios.get('/api/transactions')

		dispatch({
			type: TRANSACTION_LIST_SUCCESS,
			payload: res.data.data,
		})
	} catch (error) {
		dispatch({
			type: TRANSACTION_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const addTransaction = (newTransaction) => async (
	dispatch,
	getState,
) => {
	// const config = {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// }
	try {
		dispatch({ type: TRANSACTION_ADD_REQUEST })

		console.log(newTransaction)
		const res = await axios.post(`/api/transactions`, newTransaction)
		console.log(res.data)
		//
		dispatch({
			type: TRANSACTION_ADD_SUCCESS,
			payload: res.data.data,
		})

		//
	} catch (error) {
		dispatch({
			type: TRANSACTION_ADD_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
