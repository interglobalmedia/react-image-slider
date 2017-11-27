import React, {Component} from 'react';
import FooterIcons from './FooterIcons';
import Radium from 'radium';

class Footer extends Component {
	render() {
		const footerStyle = {
			siteFooter: {
				padding: '2em 0 0',
				opacity: '0.8',
				height: '70px'
			},
			divFooterSocial: {
				textAlign: 'center',
				width: '100%'
			},
			list: {
				display: 'inline-block'
			},
			identity: {
				textAlign: 'center',
				color: '#fff',
				fontSize: '14px',
				marginBottom: '0',
				marginTop: '60px'
			}
		}
		return (
			<footer style={footerStyle.siteFooter}  className='site-footer'>
				<div className='wrapper'>
					<div style={footerStyle.divFooterSocial} className='footer-social'>
						<ul>
							<li>
								<FooterIcons />
							</li>
						</ul>
					</div>
				</div>
				<div className='identity'>
					<p style={footerStyle.identity}>© 2017 Maria D. Campbell</p>
				</div>
			</footer>
		)
	}
}

export default Radium(Footer);
