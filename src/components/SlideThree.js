import React from 'react';
import photoAug15111623 from '../../images/photoAug15111623.jpg';

const SlideThree = (props) => {
	let background = {
		backgroundImage: 'url(photoAug15111623)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'block'
	}
	const imgStyle = {
		display: 'block'
	}
	return <div style={background} className='slide'>
		<img style={imgStyle} src={photoAug15111623} width="100%" alt="cat"/>
	</div>
}

export default SlideThree;
