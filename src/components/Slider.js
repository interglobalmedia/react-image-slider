import React, {Component} from 'react';
import Radium from 'radium';
import Slide from './Slide';
import SlideIndicator from './SlideIndicator';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
    state = {
        activeIndex: 0
    }
    goToSlide = (index) => {
        this.setState({
            activeIndex: index
        })
    }
    goToNextSlide = (e) => {
        e.preventDefault();
        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length - 1;

        if(index === slidesLength) {
            index = -1;
        }
        ++index;
        this.setState({
            activeIndex: index
        })
    }
    goToPrevSlide = (e) => {
        e.preventDefault();
        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length;

        if(index < 1) {
            index = slidesLength;
        }
        --index;
        this.setState({
            activeIndex: index
        })
    }
	render() {
        const sliderStyle = {
            imageSlider: {
                position: 'relative',
                backgroundPosition: 'center center',
                height: 'auto',
                whiteSpace: 'nowrap',
                display: 'block'
            }
        }
        return (
			<div style={sliderStyle.imageSlider} className='image-slider'>
                <LeftArrow onClick={(e) => this.goToPrevSlide(e)}/>
                <ul className='slides'>
                    {this.props.slides.map((slide, index) =>
                        <Slide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>
                <RightArrow onClick={(e) => this.goToNextSlide(e)}/>
                <ul className='slide-indicators'>
                    {this.props.slides.map((slide, index) =>
                        <SlideIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>

		);
	}
}
export default Radium(Slider);
