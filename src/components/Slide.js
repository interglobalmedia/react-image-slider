import React, {Component} from 'react';
import Radium from 'radium';

const Slide = (props) => {
	const paraStyle = {
		para: {
			color: '#b22222',
			textAlign: 'center'
		}
	}
	const slideSrcStyle	= {
		slideSrc: {
			display: 'inline-block',
			height: '100%',
			width: '100%'
		}
	}
	return (
		<div
			className={
				props.index === props.activeIndex
					? 'slide slide-active'
					: 'slide'
			}
		>
			<img style={slideSrcStyle.slideSrc} className='slide-src' src={props.slide.src} index={props.index} />
			<p style={paraStyle.para}>{props.slide.credits}</p>
		</div>
	)
}

export default Radium(Slide);
