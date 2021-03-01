import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
// import Register from './components/Register'
// import Login from './components/Login'
// import Alerts from './components/Alerts'
// import PrivateRoute from './components/PrivateRoute'

function App() {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/' component={Home} />
					{/* <Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} /> */}
				</Switch>
			</Fragment>
		</Router>
	)
}

export default App
