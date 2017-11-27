import React from 'react';
import Slide from './Slide';
import photoAug15100332 from '../images/photoAug15100332.jpg';
import photoAug15111608 from '../images/photoAug15111608.jpg';
import photoAug15111623 from '../images/photoAug15111623.jpg';
import photoAug15112130 from '../images/photoAug15112130.jpg';

describe('<Slide />', () => {
	const sliderData = [
		{
			src: photoAug15100332,
			credits: 'The Beauty'
		},
		{
			src: photoAug15111608,
			credits: 'The Plotter'
		},
		{
			src: photoAug15111623,
			credits: 'The Gazer'
		},
		{
			src: photoAug15112130,
			credits: 'The Ponderer'
		}
	];
	test('the number of elements must match exactly', () => {
		expect(sliderData).toMatchObject([
			{
				src: photoAug15100332,
				credits: 'The Beauty'
			},
			{
				src: photoAug15111608,
				credits: 'The Plotter'
			},
			{
				src: photoAug15111623,
				credits: 'The Gazer'
			},
			{
				src: photoAug15112130,
				credits: 'The Ponderer'
			}
		])
	})
})
