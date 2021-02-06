import './ContactPage.css';
import React from 'react';
import emailjs from 'emailjs-com';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const ContactPage = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm('service_z4tykq7', 'template_9hh2ctc', e.target, 'user_tXYTaYJe0kW9K57HWfBWE')
			.then(result => {
				alert('message sent successfully');
			})
			.catch(error => {
				alert('message sent failure');
			});

		e.target.reset();
	}
	return (
		<section className='contactPage' id='contact'>
			<div className='max-width'>
				<h2 className='title'>Contact Me</h2>
				<div className='contactPage__form'>
					<form onSubmit={sendEmail}>
						<input type='text' className='form-control' placeholder='Name' name='name' required />

						<input
							type='email'
							className='form-control'
							placeholder='Email Address'
							name='email'
							required
						/>

						<input type='text' className='form-control' placeholder='Subject' name='subject' required />

						<textarea
							className='form-control'
							id=''
							cols='30'
							rows='8'
							placeholder='Your message'
							name='message'
							required
						></textarea>

						<input type='submit' className='contactPage__formButton' value='Send Message'></input>
					</form>
					<div className='contactPage__formRight'>
						<h3>- OR -</h3>
						<div className='contactPage__email'>
							<EmailIcon className='contactPage__icon' fontSize='large' />
							<a href='mailto:hkcheung1217@gmail.com'>hkcheung1217@gmail.com</a>
						</div>
						<div className='contactPage__phone'>
							<PhoneAndroidIcon className='contactPage__icon' fontSize='large' />
							<span>(805)607-5288</span>
						</div>
						<div className='contactPage__icons'>
							<a
								href='https://github.com/hkcheung1217'
								target='_blank'
								rel='noopener noreferrer'
								className='contactPage__icon'
							>
								<GitHubIcon fontSize='large' />
							</a>

							<a
								href='https://www.linkedin.com/in/hoi-cheung-64704220/'
								target='_blank'
								rel='noopener noreferrer'
								className='contactPage__icon'
							>
								<LinkedInIcon fontSize='large' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
