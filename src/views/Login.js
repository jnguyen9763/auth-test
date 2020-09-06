import React, { useContext, useReducer } from 'react';

import AuthContext from '../auth/Auth';
import firebaseApp, { persistence } from '../auth/firebase';
import {
	Container,
	Form,
	Header,
	Input,
	Message,
	Segment,
} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const email = 'test@test.com';

const initialState = {
	password: '',
	incorrectPasswordError: false,
	missingPasswordError: false,
	showLoadingSpinner: false,
};

const actions = {
	PASSWORD_ENTERED: 'PASSWORD_ENTERED',
	PASSWORED_CLEARED: 'PASSWORED_CLEARED',
	EMPTY_PASSWORD_ENTERED: 'MISSING_PASSWORD_ENTERED',
	NONEMPTY_PASSWORD_ENTERED: 'NONEMPTY_PASSWORD_ENTERED',
	CORRECT_PASSWORD_ENTERED: 'CORRECT_PASSWORD_ENTERED',
	INCORRECT_PASSWORD_ENTERED: 'INCORRECT_PASSWORD_ENTERED',
};

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case actions.PASSWORD_ENTERED:
			return {
				...state,
				password: payload.password,
			};
		case actions.PASSWORED_CLEARED:
			return {
				...state,
				password: '',
			};
		case actions.EMPTY_PASSWORD_ENTERED:
			return {
				...state,
				missingPasswordError: true,
				incorrectPasswordError: false,
			};
		case actions.NONEMPTY_PASSWORD_ENTERED:
			return {
				...state,
				missingPasswordError: false,
				showLoadingSpinner: true,
			};
		case actions.CORRECT_PASSWORD_ENTERED:
			return {
				...state,
				incorrectPasswordError: false,
			};
		case actions.INCORRECT_PASSWORD_ENTERED:
			return {
				...state,
				incorrectPasswordError: true,
				showLoadingSpinner: false,
			};
		default:
			return state;
	}
};

const Login = () => {
	const { user } = useContext(AuthContext);
	const [state, dispatch] = useReducer(reducer, initialState);
	const {
		password,
		incorrectPasswordError,
		missingPasswordError,
		showLoadingSpinner,
	} = state;

	if (!!user) {
		return <Redirect to="/" />;
	}

	const attemptLogin = () => {
		firebaseApp
			.auth()
			.setPersistence(persistence)
			.then(() =>
				firebaseApp
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(() => {
						dispatch({
							type: actions.CORRECT_PASSWORD_ENTERED,
						});
						return <Redirect to="/" />;
					})
					.catch(() => {
						dispatch({
							type: actions.INCORRECT_PASSWORD_ENTERED,
						});
					})
			);
	};

	const handleLogin = () => {
		dispatch({
			type: actions.PASSWORED_CLEARED,
		});

		if (!password.trim()) {
			dispatch({
				type: actions.EMPTY_PASSWORD_ENTERED,
			});
			return;
		}

		dispatch({
			type: actions.NONEMPTY_PASSWORD_ENTERED,
		});

		attemptLogin();
	};

	const handleInput = (evt) => {
		const input = evt.target.value;

		dispatch({
			type: actions.PASSWORD_ENTERED,
			payload: { password: input },
		});
	};

	const errorMessageHeader = incorrectPasswordError
		? 'Incorrect Password'
		: 'Required Field';
	const errorMessageContent = incorrectPasswordError
		? 'Please enter the right password.'
		: 'Please enter a password.';

	return (
		<Container className="center">
			<Segment compact loading={showLoadingSpinner} raised size="large">
				<Header textAlign="center">Auth Test</Header>
				<Form
					error={incorrectPasswordError || missingPasswordError}
					onSubmit={handleLogin}
				>
					<Form.Field
						id="form-password"
						control={Input}
						error={missingPasswordError}
						icon="key"
						iconPosition="left"
						label="Password"
						onChange={handleInput}
						type="password"
						value={password}
					/>
					<Message
						error
						header={errorMessageHeader}
						content={errorMessageContent}
					/>
					<Form.Button className="center" content="Login" />
				</Form>
			</Segment>
		</Container>
	);
};

export default Login;
