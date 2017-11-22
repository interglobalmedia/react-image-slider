import React, {Component} from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import SLideFour from './SlideFour';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
    state = {
        slideCount: 1
    }
    nextSlide = () => {
        this.setState({
            slideCount: this.state.slideCount + 1
        })
    }
    previousSlide = () => {
        this.setState({
            slideCount: this.state.slideCount - 1
        })
    }
	render() {
		return (
			<div className='image-slider'>
                <div className='slider-wrapper'>
                    {this.state.slideCount === 1 ? <SlideOne /> : null}
                    {this.state.slideCount === 2 ? <SlideTwo /> : null}
                    {this.state.slideCount === 3 ? <SlideThree /> : null}
                    {this.state.slideCount === 4 ? <SlideFour /> : null}
                    <RightArrow nextSlide={() => this.nextSlide()}/>
                    <LeftArrow previousSlide={() => this.previousSlide()}/>
                </div>
            </div>
		);
	}
}
export default Slider;
