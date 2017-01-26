'use strict';

// Import libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlashcardList extends Component {
	render() {
		return;
	}
}

const mapStateToProps = (state) => {
	return { flashcards: state.flashcards };
};

export default connect(mapStateToProps)(FlashcardList);
