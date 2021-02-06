import './ProjectPage.css';
import React from 'react';

import projects from './PROJECTS_DATA';
//card-images

import { GitHub } from '@material-ui/icons';
import WebIcon from '@material-ui/icons/Web';

const ProjectPage = () => {
	return (
		<section id='project'>
			<div className='max-width'>
				<h2 className='title'>My Projects</h2>
				<div className='projects'>
					{projects.map(({ image, github, link, description }, index) => (
						<div key={index} className='item'>
							<img src={image} alt='project' />

							<div className='overlay'>
								<div className='overlay__content'>
									<span>{description}</span>
								</div>

								<div className='overlay__buttons'>
									<a href={link} target='_blank' rel='noopener noreferrer' className='btn-light'>
										<WebIcon /> Project
									</a>
									<a href={github} target='_blank' rel='noopener noreferrer' className='btn-dark'>
										<GitHub /> <span>Github</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;
