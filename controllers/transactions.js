import Transaction from '../models/transactionModel.js'
import asyncHandler from 'express-async-handler'

// @desc    GET all transactions
// @route   GET /api/transactions
// @access  Public
const getTransactions = asyncHandler(async (req, res) => {
	try {
		const transactions = await Transaction.find()

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions,
		})
	} catch (err) {
		res.status(500).json({
			sucess: false,
			error: 'Server Error',
		})
	}
})

// @desc    ADD a transaction
// @route   POST /api/transactions
// @access  Private/

const addTransaction = asyncHandler(async (req, res) => {
	try {
		const { text, amount, user, category } = req.body

		const transaction = await Transaction.create(req.body)

		return res.status(201).json({
			success: true,
			data: transaction,
		})
	} catch (err) {
		if (err.name === 'ValidationError') {
			const messages = Object.values(err.errors).map((val) => val.message)

			return res.status(400).json({
				success: false,
				error: messages,
			})
		} else {
			res.status(500).json({
				sucess: false,
				error: 'Server Error',
			})
		}
	}
})

// @desc    DELETE all transaction
// @route   DELETE /api/transactions/:id
// @access  Public

const deleteTransaction = asyncHandler(async (req, res) => {
	try {
		const transaction = await Transaction.findById(req.params.id)

		if (!transaction) {
			return res.status(404).json({
				success: false,
				error: 'No transaction found',
			})
		}
		await transaction.remove()

		res.status(200).json({
			success: true,
			data: {},
		})
	} catch (error) {
		res.status(500).json({
			sucess: false,
			error: 'Server Error',
		})
	}
})

export { addTransaction, deleteTransaction, getTransactions }
