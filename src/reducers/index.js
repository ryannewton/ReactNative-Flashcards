'use strict';

// Import libraries
import { combineReducers } from 'redux';

//Import Reducers
import FlashcardReducer from './FlashcardReducer';

export default combineReducers({
	flashcards: FlashcardReducer
});
