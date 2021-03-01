import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../actions/transactionActions'

export const AddTransaction = () => {
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)
	const [buyer, setBuyer] = useState('')
	const [category, setCategory] = useState('')

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()
		const newTransaction = {
			text,
			buyer,
			category,
			amount,
		}
		dispatch(addTransaction(newTransaction))
	}

	return (
		<>
			<h3>Add Transaction</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Enter Shop...'
					/>
				</div>
				<div className='form-control'>
					<input
						type='text'
						value={buyer}
						onChange={(e) => setBuyer(e.target.value)}
						placeholder='Purchased By...'
					/>
				</div>
				<div className='form-control'>
					<input
						type='text'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						placeholder='Enter Category...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
					</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Enter Amount...'
					/>
				</div>
				<button className='btn'>Add Transaction</button>
			</form>
		</>
	)
}
