import React from 'react';
import Radium from 'radium';

const Identity = () => {
	const identityStyle = {
		identity: {
			textAlign: 'center',
		    width: '100%',
		    margin: '60px auto 0'
		},
		paragraph: {
			color: 'white',
	        fontSize: '14px',
	        marginBottom: '12px'
		},
		paragraphMin800: {
			'@media (min-width: 800px)': {
				fontSize: '20px'
			}
		}
	}
	return (
    	<div style={identityStyle.identity} className='identity'>
    		<p style={[identityStyle.paragraph, identityStyle.paragraphMin800]}>© 2017 Maria D. Campbell</p>
    	</div>
	)
}

export default Radium(Identity);
