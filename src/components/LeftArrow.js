import React, {Component} from 'react';
import Radium from 'radium';

const LeftArrow = (props) => {
	const sliderLeftArrowStyle = {
		sliderLeftArrow: {
			position: 'absolute',
			top: '50%',
			left: '10%',
			zIndex: '999',
			color: '#fff'
		},
		sliderBothArrows: {
			fontSize: '28px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer'
		}
	}
	return (
		<div style={[sliderLeftArrowStyle.sliderLeftArrow,sliderLeftArrowStyle.sliderBothArrows]} className='slider-left-arrow' onClick={props.onClick}>
			<i className="fa fa-chevron-left" aria-hidden="true"></i>
		</div>
	);

}

export default Radium(LeftArrow);
