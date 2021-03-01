import React, { useContext } from 'react'
import { numberWithCommas } from '../utils/format'
import { useSelector } from 'react-redux'

const Balance = () => {
	const transactionList = useSelector((state) => state.transactionList)

	const { transactions } = transactionList

	const amounts = transactions.map((transaction) => transaction.amount)

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

	return (
		<>
			<h4>Balance</h4>
			<h1 id='balance'>R{numberWithCommas(total)}</h1>
		</>
	)
}

export default Balance
