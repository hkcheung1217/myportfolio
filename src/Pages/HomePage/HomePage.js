import './HomePage.css';

import React from 'react';
import Typical from 'react-typical';

const HomePage = () => {
	return (
		<section className='homePage' id='home'>
			<div className='max-width'>
				<div className='homePage__content'>
					<div className='homePage__text__1'>Hello, my name is</div>
					<div className='homePage__text__2'>Hoi Cheung</div>
					<div className='homePage__text__3'>
						And I'm a{' '}
						<Typical
							className='homePage__text__typical'
							loop={Infinity}
							wrapper='b'
							steps={['developer', 1000, 'climber', 1000]}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
