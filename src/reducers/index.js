'use strict';

// Import libraries
import { combineReducers } from 'redux';

//Import Reducers
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
