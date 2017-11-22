import React from 'react';

import photoAug15111608 from '../../images/photoAug15111608.jpg';

const SlideTwo = (props) => {
	let background = {
		backgroundImage: 'url(photoAug15111608)',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		display: 'block'
	}
	const imgStyle = {
		display: 'block'
	}
	return <div style={background} className='slide'>
		<img style={imgStyle} src={photoAug15111608} width="100%" alt="cat"/>
	</div>
}

export default SlideTwo;
