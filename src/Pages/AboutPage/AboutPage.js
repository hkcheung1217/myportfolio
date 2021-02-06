import './About.css';
import React from 'react';

const AboutPage = () => {
	return (
		<section className='about' id='about'>
			<div className='max-width'>
				<h2 className='title'>About me</h2>
				<div className='about-content'>
					<div className='text'>I'm Hoi</div>
					<span>I am a software developer.</span>
					<span>I graduated with a bachelor's degree of applied mathematics at CSUN.</span>
					<span>
						My greatest strength is, my persistence and tolerance when tackling new and complex problems.
					</span>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
