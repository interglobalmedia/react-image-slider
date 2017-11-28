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
            },
            slide: {
                marginRight: 'auto',
                marginLeft: 'auto',
                display: 'none',
                textAlign: 'center',
                fontSize: '20px'
            },
            slideMin800: {
                fontSize: '24px'
            }
        }
        const slideIndicatorsStyle = {
            slideIndicators: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '20px'
            }
        }
        return (
			<div style={sliderStyle.imageSlider} className='image-slider'>
                <LeftArrow onClick={(e) => this.goToPrevSlide(e)}/>
                <ul className='slides'>
                    {this.props.slides.map((slide, index) =>
                        <Slide style={[sliderStyle.slide, sliderStyle.slideMin800]}
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>
                <RightArrow onClick={(e) => this.goToNextSlide(e)}/>
                <ul style={slideIndicatorsStyle.slideIndicators} className='slide-indicators'>
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
