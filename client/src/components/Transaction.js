import React from 'react'
import { numberWithCommas } from '../utils/format'

export const Transaction = ({ transaction }) => {
	return (
		<li className={transaction.buyer == 'Jo' ? 'member1' : 'member2'}>
			<div className='list_display'>
				{transaction.createdAt.substring(0, 10)}
				<span>{transaction.category}</span>
				<span>{transaction.buyer}</span>
				<span>R{numberWithCommas(transaction.amount.toFixed(2))}</span>
			</div>
			<button
				// onClick={() => deleteTransaction(transaction._id)}
				className='delete-btn'
			>
				x
			</button>
		</li>
	)
}
