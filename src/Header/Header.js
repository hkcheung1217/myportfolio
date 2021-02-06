import './Header.css';

import React, { useState, useEffect } from 'react';

// material-ui icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
	const [affix, setAffix] = useState('');
	const [showHome, setShowHome] = useState('');
	const [aboutActive, setAboutActive] = useState('');
	const [skillsActive, setSkillsActive] = useState('');
	const [projectsActive, setProjectsActive] = useState('');
	const [contactActive, setContactActive] = useState('');

	const [menuActive, setMenuActive] = useState(false);

	const listenScrollEvent = e => {
		if (window.scrollY > 716) {
			setAffix('affix');
			setShowHome('showHome');
		} else {
			setAffix('');
			setAboutActive('');
			setSkillsActive('');
			setProjectsActive('');
			setContactActive('');
			setShowHome('');
		}
	};

	const listenAnotherScrollEvent = e => {
		if (window.scrollY > 716 && window.scrollY < 1120) {
			setAboutActive('active');
			setSkillsActive('');
			setProjectsActive('');
			setContactActive('');
		} else if (window.scrollY >= 1120 && window.scrollY < 2050) {
			setSkillsActive('active');
			setAboutActive('');
			setProjectsActive('');
			setContactActive('');
		} else if (window.scrollY >= 2050 && window.scrollY < 2950) {
			setProjectsActive('active');
			setSkillsActive('');
			setAboutActive('');
			setContactActive('');
		} else if (window.scrollY >= 2950) {
			setContactActive('active');
			setAboutActive('');
			setSkillsActive('');
			setProjectsActive('');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', listenAnotherScrollEvent);
	}, []);

	return (
		<nav className={`navbar ${affix}`}>
			<div className='max-width'>
				<a href='#home' className={`home ${showHome}`}>
					<HomeIcon />
					<span>Home</span>
				</a>

				<ul className={menuActive ? 'menu-active menu' : 'menu'}>
					<li>
						<a href='#about' className={`menu-btn ${aboutActive}`}>
							About
						</a>
					</li>
					<li>
						<a href='#skills' className={`menu-btn ${skillsActive}`}>
							Skills
						</a>
					</li>
					<li>
						<a href='#project' className={`menu-btn ${projectsActive}`}>
							Projects
						</a>
					</li>
					<li>
						<a href='#contact' className={`menu-btn ${contactActive}`}>
							Contact
						</a>
					</li>
				</ul>
				<div className='menu-btn' onClick={() => setMenuActive(!menuActive)}>
					{menuActive ? <CloseIcon /> : <MenuIcon />}
				</div>
			</div>
		</nav>
	);
};

export default Header;
