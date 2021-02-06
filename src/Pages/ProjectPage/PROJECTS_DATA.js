import CIOHLogo from '../../assets/cards/cioh2.png';
import PWLogo from '../../assets/cards/passwordGenerator.png';
import DischatLogo from '../../assets/cards/dischat.png';
import AuthLogo from '../../assets/cards/simpleAuth.png';
import PortfolioLogo from '../../assets/cards/portfolio.png';

const projects = [
	{
		image: CIOHLogo,
		github: 'https://github.com/hkcheung1217/CIOH',
		link: 'https://ciohapp.herokuapp.com/',
		description:
			'eCommerce web app built by using React, Node.js, MongoDB, CSS, Material-UI, Stripe, and hosted on Heroku.',
	},
	{
		image: DischatLogo,
		github: 'https://github.com/hkcheung1217/react-node-mysql-register-signin',
		link: 'https://chatroom-fbdf5.web.app/',
		description:
			'A simple chat app built by using React, CSS, and Firebase. User just need a Google account to sign in and chat with multiple users at the same time.',
	},
	{
		image: PortfolioLogo,
		github: 'https://github.com/hkcheung1217/react-node-mysql-register-signin',
		link: 'https://ciohapp.herokuapp.com/',
		description: 'My portfolio website built by using React, CSS, and Material-UI icons.',
	},
	{
		image: PWLogo,
		github: 'https://github.com/hkcheung1217/pwGenerator',
		link: 'https://passwordgenerator-8e2d8.web.app/',
		description: 'A password generator app built by using React, CSS, and Material-UI icons.',
	},
	{
		image: AuthLogo,
		github: 'https://github.com/hkcheung1217/react-node-mysql-register-signin',
		link: 'https://hkcheung1217.github.io/react-node-mysql-register-signin/',
		description:
			'A simple authentication app built by using React, SASS, and ClearDB MySQL. Backend application hosted on Heroku. User would be alerted whether the right password has entered.',
	},
];

export default projects;
