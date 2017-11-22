import React, {Component} from 'react';
import Slider from './components/Slider';

export default class App extends Component {
	render() {
		return (
			<div className='App Site'>
				<div className='Site-content'>
					<Slider />
				</div>
				<footer>© 2017 Maria D. Campbell</footer>
			</div>
		)
	}
}
