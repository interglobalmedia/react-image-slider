import React from 'react';

const LeftArrow = (props) => {
	return (
		<div className='slider-left-arrow' onClick={props.previousSlide}>
			<i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
		</div>
	);
}

export default LeftArrow;
