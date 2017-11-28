import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

import photoAug15100332 from '../images/photoAug15100332.jpg';
import photoAug15111608 from '../images/photoAug15111608.jpg';
import photoAug15111623 from '../images/photoAug15111623.jpg';
import photoAug15112130 from '../images/photoAug15112130.jpg';

const sliderData = [
	{
		src: photoAug15100332,
		credits: 'The Beauty'
	},
	{
		src: photoAug15111608,
		credits: 'The Plotter'
	},
	{
		src: photoAug15111623,
		credits: 'The Gazer'
	},
	{
		src: photoAug15112130,
		credits: 'The Ponderer'
	}
];

class App extends Component {
	render() {
		return (
			<StyleRoot>
				<div className='App Site'>
					<Header />
					<div className='Site-content'>
						<Slider slides={sliderData} />
					</div>
					<Footer />
				</div>
			</StyleRoot>
		)
	}
}

export default Radium(App);
