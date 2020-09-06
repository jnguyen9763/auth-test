import React from 'react';

import { Container, Header, Segment } from 'semantic-ui-react';
import PostBoard from '../posts/PostBoard';

const Home = () => {
	return (
		<Container>
			<Segment basic>
				<Header as="h1" content="Home" />
			</Segment>
			<PostBoard />
		</Container>
	);
};

export default Home;
