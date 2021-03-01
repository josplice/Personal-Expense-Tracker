import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		console.log(`Connected to the DB: ${conn.connection.host}`.cyan)
	} catch (err) {
		console.log(`Error: ${err.message}`.red)
		process.exit(1)
	}
}

export default connectDB
