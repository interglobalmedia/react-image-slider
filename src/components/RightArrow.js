import React, {Component} from 'react';
import Radium from 'radium';

const RightArrow = (props) => {
	const sliderRightArrowStyle = {
		sliderRightArrow: {
			position: 'absolute',
			    top: '50%',
			    right: '10%',
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
		<div style={[sliderRightArrowStyle.sliderRightArrow, sliderRightArrowStyle.sliderBothArrows]} onClick={props.onClick} className='slider-right-arrow'>
			<i className='fa fa-chevron-right' aria-hidden='true'></i>
		</div>
	)
}

export default Radium(RightArrow);
