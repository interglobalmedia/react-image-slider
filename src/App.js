import React, {Component} from 'react';
import Radium from 'radium';
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
		const headerStyle = {
			header: {
				height: '60px',
				textAlign: 'center',
				width: '100%'
			},
			appHeaderH1: {
				width: '100%',
				position: 'absolute',
				zIndex: '10',
				top: '28px',
				color: 'firebrick',
				left: '50%',
				transform: 'translateX(-50%)',
				fontSize: '28px',
				letterSpacing: '0.03em'
			},
			appHeaderH1Min800: {
				'@media (min-width: 800px)': {
					fontSize: '40px',
					top: '18px'
				}
			}
		}
		return (

			<div className='App Site'>
				<header style={headerStyle.header}>
					<h1 style={[headerStyle.appHeaderH1, headerStyle.appHeaderH1Min800]} className='App-header'>Cat Slider</h1>
				</header>
				<div className='Site-content'>
					<Slider slides={sliderData} />
				</div>
				<Footer />
			</div>
		)
	}
}

export default Radium(App);
