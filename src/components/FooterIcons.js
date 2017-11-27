import React, {Component} from 'react';
import footerTwitter from '../../images/footerTwitter.svg';
import footerGithub from '../../images/footerGithub.svg';
import footerGoogle from '../../images/footerGoogle.svg';
import footerLinkedin from '../../images/footerLinkedin.svg';

class FooterIcons extends Component {
	render() {
		return (
			[
				{
					id: 1,
					link: 'https://twitter.com/letsbsocial1',
					name: 'footerTwitter',
					src: footerTwitter,
					text: 'twitter'
				},
				{
					id: 2,
					link: 'https://github.com/interglobalmedia',
					name: 'footerGithub',
					src: footerGithub,
					text: 'github'
				},
				{
					id: 3,
					link: 'https://plus.google.com/u/0/110861192597778984723',
					name: 'footerGoogleplus',
					src: footerGoogle,
					text: 'google plus'
				},
				{
					id: 4,
					link: 'https://www.linkedin.com/in/mariacampbell/',
					name: 'footerLinkedin',
					src: footerLinkedin,
					text: 'linkedin'

				}
			].map((socialFooterIcon) => {
				return (<a key={socialFooterIcon.id} href={socialFooterIcon.link}>
					<img className={socialFooterIcon.name} src={socialFooterIcon.src} alt={socialFooterIcon.text}/></a>)
			})
		)
	}
}

export default FooterIcons;
