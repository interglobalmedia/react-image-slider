import React from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium'
import App from './App';
import './style/style.scss';

ReactDOM.render(
	<StyleRoot><App /></StyleRoot>, document.getElementById('root')
);
