import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import firebaseApp from './firebase';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(undefined);

	useEffect(() => firebaseApp.auth().onAuthStateChanged(setUser), []);

	return (
		<AuthContext.Provider value={{ user }}>
			{user === undefined ? (
				<Container className="center">
					<Dimmer active inverted>
						<Loader content="Loading" inverted size="large" />
					</Dimmer>
				</Container>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
