import React from 'react'
import './about.css'
import aboutme from '../../assets/aboutme.png'
import { FaAward } from 'react-icons/fa'
import { CgMicrosoft } from 'react-icons/cg'
import { AiFillCode } from 'react-icons/ai'

function About() {
	return (
		<section id="about" >
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about_container" >
				<div className="about_me" >
					<div className="aboutme_img" >
						<img src={aboutme} alt="about sellak" />
					</div>
				</div>
				<div className="about_content" >
					<div className="about_cards" >
						<article className="about_card">
							<AiFillCode className="about_icon" />
							<h5>Education</h5>
							<small>  Software Engineering</small>
						</article>

						<article className="about_card">
							<FaAward className="about_icon" />
							<h5>Certifications</h5>
							<small> +20  Software Certifications</small>
						</article>

						<article className="about_card">
							<CgMicrosoft className="about_icon" />
							<h5>Projects</h5>
							<small> +10 Ongoing Projects</small>
						</article>
					</div>
					<p>
						Mouad Sellak Software Engineering Student at the National School of Applied Sciences of Fez Morocco.
						I am interested in new technologies especially in the field of web development.
						I am able to create sophisticated custom websites and web applications.
					</p>
					<a href='#contact' className="btn btn-primary ">Contact</a>
				</div>
			</div>
		</section>
	)
}

export default About 