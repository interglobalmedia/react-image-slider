import React from 'react';
import ReactDOM from 'react-dom';
//import Radium from 'radium';
import App from './App';

describe('<App />', () => {
	it('should render to the page without crashing', function() {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	})
})
