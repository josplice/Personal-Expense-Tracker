import React from 'react'
import { numberWithCommas } from '../utils/format'
import { useSelector } from 'react-redux'

export const MemberContributions = () => {
	const transactionList = useSelector((state) => state.transactionList)

	const { transactions } = transactionList

	let member1Amount = 0
	let member2Amount = 0
	transactions.map((transaction) => {
		transaction.buyer === 'Jo'
			? (member1Amount += transaction.amount)
			: (member2Amount += transaction.amount)
	})

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Tracy</h4>
				<p className='money member2'>
					R{numberWithCommas(member2Amount.toFixed(2))}
				</p>
			</div>
			<div>
				<h4>Jo</h4>
				<p className='money member1'>
					R{numberWithCommas(member1Amount.toFixed(2))}
				</p>
			</div>
		</div>
	)
}
