import React, { useEffect } from 'react'
import { Transaction } from './Transaction'
import { useSelector, useDispatch } from 'react-redux'
import { listTransactions } from '../actions/transactionActions'

export const TransactionList = () => {
	const transactionList = useSelector((state) => state.transactionList)

	const { transactions } = transactionList

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(listTransactions())
	}, [dispatch])

	return (
		<>
			<h3>History</h3>
			<ul className='list'>
				{transactions.map((transaction) => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>
		</>
	)
}
