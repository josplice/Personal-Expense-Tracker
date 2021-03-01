import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import UserContext from '../context/users/userContext'

const Register = (props) => {
	const alertContext = useContext(AlertContext)

	const userContext = useContext(UserContext)

	const { setAlert } = alertContext

	const { register, error, clearErrors, isAuthenticated } = userContext

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/')
		}

		if (error === 'User already exists') {
			setAlert(error, 'danger')
			clearErrors()
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history])

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	})

	const { name, email, password } = user

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()

		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger')
		} else {
			register({
				name,
				email,
				password,
			})
		}
	}

	return (
		<div clasname='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						value={password}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	)
}

export default Register
