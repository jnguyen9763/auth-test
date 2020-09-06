import React from 'react';

import { AuthProvider } from './auth/Auth';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';
import PrivateRoute from './auth/PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route component={Login} path="/login" />
					<PrivateRoute component={Home} exact path="/" />
					<Route component={NotFound} path="/404" />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
