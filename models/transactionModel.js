import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			trim: true,
			required: [true, 'Please add a description'],
		},
		amount: {
			type: Number,
			required: [true, 'Please enter an amount'],
			default: 0,
		},
		category: {
			type: String,
			required: true,
		},
		buyer: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
)

const Transaction = mongoose.model('Transaction', TransactionSchema)

export default Transaction
