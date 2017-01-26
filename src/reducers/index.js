'use strict';

// Import libraries
import { combineReducers } from 'redux';

//Import Reducers
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});
