import React from 'react';

const RightArrow = (props) => {
	return (
		<div onClick={props.nextSlide} className='slider-right-arrow'>
			<i className='fa fa-chevron-right fa-2x' aria-hidden='true'></i>
		</div>
	);
}

export default RightArrow;
