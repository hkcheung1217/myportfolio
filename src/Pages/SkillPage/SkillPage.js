import './SkillPage.css';
import React from 'react';

//skill list
import skills from './SKILLS_DATA';

const SkillPage = () => {
	return (
		<section className='skillPage' id='skills'>
			<div className='max-width'>
				<h2 className='title'>My skills</h2>
				<div className='skillPage__container'>
					{skills.map(({ name, icon }, index) => (
						<div key={index} className='skillPage__item'>
							<div className='skillPage__itemTitle'>
								<div className='skillPage__itemImage'>
									<img src={icon} className='skillPage__icon' alt='icons' />
								</div>
								<span>{name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillPage;
