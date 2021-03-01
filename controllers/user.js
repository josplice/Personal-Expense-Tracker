import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth the user & get a token
// @route   POST /api/v1/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401).json({
			sucess: false,
			error: 'Invalid email or password',
		})
	}
})

// @desc    Register a user
// @route   POST /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400).json({
			sucess: false,
			error: 'User already exists',
		})
	}

	const user = await User.create({
		name,
		email,
		password,
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		})
	} else {
		res.status(401).json({
			sucess: false,
			error: 'Invalid user details',
		})
	}
})

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		})
	} else {
		res.status(404).json({
			sucess: false,
			error: 'User not Found',
		})
	}
})

export { authUser, getUserProfile, registerUser }
