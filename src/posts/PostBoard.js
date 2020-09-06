import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';
import Post from './Post';

const PostBoard = (props) => {
	return (
		<Grid columns="4" doubling stackable>
			<Grid.Row>
				<Grid.Column>
					<Post />
					<Post />
					<Post />
				</Grid.Column>
				<Grid.Column>
					<Post />
					<Post />
					<Post />
				</Grid.Column>
				<Grid.Column>
					<Post />
					<Post />
				</Grid.Column>
				<Grid.Column>
					<Post />
					<Post />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

PostBoard.propTypes = {};

export default PostBoard;
