import React, { useContext, useEffect, Fragment } from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import { MemberContributions } from '../components/MemberContributions'
import { TransactionList } from '../components/TransactionList'
import { AddTransaction } from '../components/AddTransaction'
import { useDispatch } from 'react-redux'
import { listTransactions } from '../actions/transactionActions'

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(listTransactions())
	}, [dispatch])

	return (
		<Fragment>
			<Header />
			<div className='container'>
				<Balance />
				<MemberContributions />
				<AddTransaction />
				<TransactionList />
			</div>
		</Fragment>
	)
}

export default Home
