import React, {Component} from 'react';
import Radium from 'radium';

const Slide = (props) => {
	const paraStyle = {
		color: '#b22222',
		textAlign: 'center'
	}
	return (
		<div
			className={
				props.index === props.activeIndex
					? 'slide slide-active'
					: 'slide'
			}
		>
			<img className='slide-src' src={props.slide.src} index={props.index} />
			<p style={paraStyle}>{props.slide.credits}</p>
		</div>
	)
}

export default Radium(Slide);
