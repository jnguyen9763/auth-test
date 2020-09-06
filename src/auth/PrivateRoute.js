import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './Auth';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				!!user ? <Component {...props} /> : <Redirect to="/login" />
			}
		></Route>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
	rest: PropTypes.any,
};

export default PrivateRoute;
