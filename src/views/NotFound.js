import React from 'react';

import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Container className="center" textAlign="center">
			<div>
				<Segment basic>
					<Header as="h1" icon>
						<Icon name="lock" style={{ fontSize: '5em' }} />
						<Segment basic />
						<Header.Content content="404" />
						<Header.Subheader content="Sorry, the page you were looking for was not found." />
					</Header>
				</Segment>
				<Button as={Link} content="Click here to go home" icon="home" to="/" />
			</div>
		</Container>
	);
};

export default NotFound;
