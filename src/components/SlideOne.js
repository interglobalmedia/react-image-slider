import React from 'react';

import photoAug15100332 from '../../images/photoAug15111608.jpg';

const SlideOne = (props) => {
	let background = {
		backgroundImage: 'url(photoAug15100332)',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		display: 'block'
	}
	const imgStyle = {
		display: 'block'
	}
	return <div style={background} className='slide'>
		<img style={imgStyle} src={photoAug15100332} width="100%" alt="cat"/>
	</div>
}

export default SlideOne;
