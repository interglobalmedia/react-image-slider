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
				marginBottom: '5px',
				marginTop: '60px'
			},
			identityMin320: {
				'@media (min-width: 320px)': {
					fontSize: '14px',
					marginBottom: '5px'

				}
			},
			identityMin600: {
				'@media (min-width: 600px)': {
					fontSize: '18px'
				}
			},
			identityMin800: {
				'@media (min-width: 800px)': {
					fontSize: '20px'
				}
			},
			identityMin1024: {
				'@media (min-width: 1024px)': {
					fontSize: '24px'
				}
			},
			identityMin1440: {
				'@media (min-width: 1440px)': {
					fontSize: '28px'
				}
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
					<p style={[footerStyle.identity, footerStyle.identityMin320, footerStyle.identityMin600, footerStyle.identityMin800, footerStyle.identityMin1024, footerStyle.identityMin1440]}>© 2017 Maria D. Campbell</p>
				</div>
			</footer>
		)
	}
}

export default Radium(Footer);
