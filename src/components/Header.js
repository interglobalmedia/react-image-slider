import React, {Component} from 'react';
import Radium from 'radium';

class Header extends Component {
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
    		<header style={headerStyle.header}>
    			<h1 style={[headerStyle.appHeaderH1, headerStyle.appHeaderH1Min800]} className='App-header'>Cat Slider</h1>
    		</header>
    	)
	}
}

export default Radium(Header);
