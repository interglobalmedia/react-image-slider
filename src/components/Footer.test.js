import React from 'react';
import Footer from './Footer';

import footerTwitter from '../../images/footerTwitter.svg';
import footerGithub from '../../images/footerGithub.svg';
import footerGoogle from '../../images/footerGoogle.svg';
import footerLinkedin from '../../images/footerLinkedin.svg';

describe('<Footer />', () => {
	const expected = [
		{
			id: 1,
			svg: footerTwitter
		},
		{
			id: 2,
			svg: footerGithub
		},
		{
			id: 3,
			svg: footerGoogle
		},
		{
			id: 4,
			svg: footerLinkedin
		}
	];
	it('matches even if received contains additional elements', () => {
		expect([
    		{
    			id: 1,
    			svg: footerTwitter
    		},
    		{
    			id: 2,
    			svg: footerGithub
    		},
    		{
    			id: 3,
    			svg: footerGoogle
    		},
    		{
    			id: 4,
    			svg: footerLinkedin
    		}
    	]).toEqual(expect.arrayContaining(expected));
	})
})
