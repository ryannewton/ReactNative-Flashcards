'use strict';

// Import libraries
import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	UIManager,
	LayoutAnimation,
	Platform
} from 'react-native';
import { connect } from 'react-redux';

//Import components, functions, and styles
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillMount() {
		// LayoutAnimation is disabled by default on Android
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}


	renderDescription() {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;

	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
