import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

const Post = (props) => {
	return (
		<Card centered>
			<Card.Content>
				<Card.Header content="Header" />
				<Card.Description content="Description" />
			</Card.Content>
		</Card>
	);
};

Post.propTypes = {};

export default Post;
