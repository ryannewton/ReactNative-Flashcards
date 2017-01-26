'use strict';

// Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';

//Import components, functions, and styles
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		return (
			<CardSection>
				<Text>
					{this.props.library.title}
				</Text>
			</CardSection>
		);
	}
}

export default ListItem;
