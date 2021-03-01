import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import path from 'path'

import transactionRoutes from './routes/transactionRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use('/api/transactions', transactionRoutes)
app.use('/api/users', userRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
	)
} else {
	app.get('/', (req, res) => {
		res.send('API is running...')
	})
}

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold,
	),
)
