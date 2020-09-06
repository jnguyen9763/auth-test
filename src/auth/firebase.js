import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAybDY9cPrKnq7OxGG-p360fwcLd9nPKCk',
	authDomain: 'auth-test-bfee6.firebaseapp.com',
	databaseURL: 'https://auth-test-bfee6.firebaseio.com',
	projectId: 'auth-test-bfee6',
	storageBucket: 'auth-test-bfee6.appspot.com',
	messagingSenderId: '125965541045',
	appId: '1:125965541045:web:7d587adec209c4d7c328fc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const persistence = firebase.auth.Auth.Persistence.SESSION;
export default firebaseApp;
