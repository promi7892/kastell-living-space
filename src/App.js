import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Heading from './Pages/Home/Heading/Heading';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Booking from './Pages/Home/Booking/Booking';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Home/Explore/Explore';
import MakePayment from './Dashboard/MakePayment/MakePayment';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Heading></Heading>
				<Router>
					<Switch>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<PrivateRoute path='/dashboard'>
							<Dashboard></Dashboard>
						</PrivateRoute>
						<Route path='/explore'>
							<Explore></Explore>
						</Route>
						<PrivateRoute path='/booking/:bookingId'>
							<Booking></Booking>
						</PrivateRoute>
						<Route path='/register'>
							<Register></Register>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>
						<PrivateRoute path='/about'>
							<About />
						</PrivateRoute>
						<Route path='/contact'>
							<Contact />
						</Route>{' '}
						<Route path='/payment'>
							<MakePayment></MakePayment>
						</Route>
						<Route exact path='/'>
							<Home />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
