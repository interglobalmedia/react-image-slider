import React from 'react';
import photoAug15112130 from '../../images/photoAug15112130.jpg';

const SlideFour = (props) => {
	let background = {
		backgroundImage: 'url(photoAug15112130)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'block'
	}
	const imgStyle = {
		display: 'block'
	}
	return <div style={background} className='slide'>
		<img style={imgStyle} src={photoAug15112130} width="100%" alt="cat"/>
	</div>
}

export default SlideFour;
