import React from 'react';
import FooterIcons from './FooterIcons';

import footerTwitter from '../../images/footerTwitter.svg';
import footerGithub from '../../images/footerGithub.svg';
import footerGoogle from '../../images/footerGoogle.svg';
import footerLinkedin from '../../images/footerLinkedin.svg';

describe('<FooterIcons />', () => {
	const expected = [
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
	];
	it('matches even if received contains additional elements', () => {
		expect([
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
    	]).toEqual(expect.arrayContaining(expected));
	})
})
