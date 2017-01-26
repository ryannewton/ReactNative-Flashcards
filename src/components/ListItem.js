'use strict';

// Import libraries
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

//Import components, functions, and styles
import { CardSection } from './common';

class ListItem extends Component {

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => id /*change selected item*/}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;
