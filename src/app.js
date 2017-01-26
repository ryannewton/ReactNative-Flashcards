'use strict';

// Import libraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Import components, functions, and styles
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Flashcards" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
