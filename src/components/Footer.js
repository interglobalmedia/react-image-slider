import React, {Component} from 'react';
//import Radium from 'radium';
import FooterIcons from './FooterIcons';
//import Identity from './Identity';

class Footer extends Component {
	render() {
		const footerStyle = {
			siteFooter: {
				padding: '2em 0 0',
			    opacity: '0.8',
			    height: '120px'
			},
			divFooterSocial: {
				textAlign: 'center',
		        width: '100%'
			},
			list: {
				display: 'inline-block'
			}
		}
		return (
			<footer style={footerStyle.siteFooter} className='site-footer'>
				<div className='wrapper'>
					<div style={footerStyle.divFooterSocial} className='footer-social'>
						<ul>
							<li style={footerStyle.list}>
								<FooterIcons />
							</li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;
