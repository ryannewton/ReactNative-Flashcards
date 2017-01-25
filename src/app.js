'use strict';

// Import libraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Import components, functions, and styles
import reducers from './reducers';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View />
		</Provider>
	);
};

export default App;
