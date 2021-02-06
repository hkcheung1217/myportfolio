import React from 'react';
import './App.css';
import Header from './Header/Header';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import HomePage from './Pages/HomePage/HomePage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import SkillPage from './Pages/SkillPage/SkillPage';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<HomePage />
			<AboutPage />
			<SkillPage />
			<ProjectPage />
			<ContactPage />
		</div>
	);
};

export default App;
