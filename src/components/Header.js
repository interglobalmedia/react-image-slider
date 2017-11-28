import React, {Component} from 'react';
import Radium from 'radium';

class Header extends Component {
	render() {
		const headerStyle = {
    		header: {
    			height: '70px',
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
			appHeaderH1Min320: {
				'@media (min-width: 320px)': {
					fontSize: '28px',
					top: '24px'
				}
			},
			appHeaderH1Min600: {
				'@media (min-width: 600px)': {
					fontSize: '32px',
					top: '22px'
				}
			},
    		appHeaderH1Min800: {
    			'@media (min-width: 800px)': {
    				fontSize: '40px',
    				top: '18px'
    			}
    		},
			appHeaderH1Min1024: {
				'@media (min-width: 1024px)': {
					fontSize: '48px',
					top: '14px'
				}
			},
			appHeaderH1Min1440: {
				'@media (min-width: 1440px)': {
					fontSize: '60px',
					top: '8px'
				}
			}
    	}
    	return (
    		<header style={headerStyle.header}>
    			<h1 style={[headerStyle.appHeaderH1, headerStyle.appHeaderH1Min320, headerStyle.appHeaderH1Min600, headerStyle.appHeaderH1Min800, headerStyle.appHeaderH1Min1024, headerStyle.appHeaderH1Min1440]} className='App-header'>Cat Slider</h1>
    		</header>
    	)
	}
}

export default Radium(Header);
