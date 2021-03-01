import express from 'express'
import { getTransactions } from '../controllers/transactions.js'
import { addTransaction } from '../controllers/transactions.js'
import { deleteTransaction } from '../controllers/transactions.js'

const router = express.Router()

router.route('/').get(getTransactions).post(addTransaction)
router.route('/:id').delete(deleteTransaction)

export default router
