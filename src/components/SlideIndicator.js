import React, {Component} from 'react';
import Radium from 'radium';

class SlideIndicator extends Component {
	render() {
		return (
    		<li>
    			<a className={this.props.index === this.props.activeIndex
    				? 'slide-indicator slide-indicator-active'
    				: 'slide-indicator'
    			}
    			onClick={this.props.onClick}
    			/>
    		</li>
    	)
	}

}

export default Radium(SlideIndicator);
