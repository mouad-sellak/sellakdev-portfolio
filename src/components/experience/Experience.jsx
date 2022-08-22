import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { FaBootstrap } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaLaravel } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaWordpress } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaLaptopCode } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { AiFillFileWord } from 'react-icons/ai'
import { MdMovieCreation } from 'react-icons/md'
import ProgressBar from "@ramonak/react-progress-bar";
function Experience() {
	const data = [
		{
			title: "Frontend Developement",
			content: [
				{
					id: 1,
					name: "HTML",
					icon: <AiFillHtml5 className='experience_icon' />,
					bar: {
						bgColor: "#ff3b00",
						completed: "80"
					}
				},
				{
					id: 2,
					name: "CSS",
					icon: <IoLogoCss3 className='experience_icon' />,
					bar: {
						bgColor: "#FEC260",
						completed: "80"
					}
				},
				{
					id: 3,
					name: "React",
					icon: <FaReact className='experience_icon' />,
					bar: {
						bgColor: "#A10035",
						completed: "80"
					}
				},
				{
					id: 4,
					name: "Bootstrap",
					icon: <FaBootstrap className='experience_icon' />,
					bar: {
						bgColor: "#FA2FB5",
						completed: "80"
					}
				},
			]
		},

		{
			title: "Backend Developement",
			content: [
				{
					id: 5,
					name: "Laravel",
					icon: <FaLaravel className='experience_icon' />,
					bar: {
						bgColor: "#EF5B0C",
						completed: "60"
					}
				},
				{
					id: 6,
					name: "NodeJs",
					icon: <FaNodeJs className='experience_icon' />,
					bar: {
						bgColor: "#FF0063",
						completed: "60"
					}
				},
				{
					id: 7,
					name: "Django",
					icon: <SiDjango className='experience_icon' />,
					bar: {
						bgColor: "#4B8673",
						completed: "70"
					}
				},
				{
					id: 8,
					name: "Spring Boot",
					icon: <SiSpringboot className='experience_icon' />,
					bar: {
						bgColor: "#810955",
						completed: "50"
					}
				},
			]
		},

		{
			title: "Mobile & DBMS & CMS",
			content: [
				{
					id: 9,
					name: "React Native",
					icon: <TbBrandReactNative className='experience_icon' />,
					bar: {
						bgColor: "#FFA500",
						completed: "80"
					}
				},
				{
					id: 10,
					name: "MySQL",
					icon: <SiMysql className='experience_icon' />,
					bar: {
						bgColor: "#990000",
						completed: "60"
					}
				},
				{
					id: 11,
					name: "MongoDB",
					icon: <SiMongodb className='experience_icon' />,
					bar: {
						bgColor: "#FAC213",
						completed: "50"
					}
				},
				{
					id: 12,
					name: "WordPress",
					icon: <FaWordpress className='experience_icon' />,
					bar: {
						bgColor: "#D61C4E",
						completed: "50"
					}
				},
			]
		},

		{
			title: "Other Skills",
			content: [
				{
					id: 13,
					name: "Design",
					icon: <MdDesignServices className='experience_icon' />,
					bar: {
						bgColor: "#FFA500",
						completed: "60"
					}
				},
				{
					id: 14,
					name: "Competitive Programming",
					icon: <FaLaptopCode className='experience_icon' />,
					bar: {
						bgColor: "#990000",
						completed: "70"
					}
				},
				{
					id: 15,
					name: "Typing",
					icon: <AiFillFileWord className='experience_icon' />,
					bar: {
						bgColor: "#FAC213",
						completed: "50"
					}
				},
				{
					id: 16,
					name: "Content Creation",
					icon: <MdMovieCreation className='experience_icon' />,
					bar: {
						bgColor: "#D61C4E",
						completed: "40"
					}
				},

			]
		},
	]
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience & Skills</h2>
			<div className="container experience_container" >
				{data.map(({id, title, content }) => (
					<div key={id} className="experience_other" >
						<h3>{title}</h3>
						<div className="experience_content">
					 		{content.map(({id,name,icon,bar}) =>(
								<article key={id} className="experience_details">
									<div className="experience_skill" >
										{icon}
										<h4>{name}</h4>
									</div>
									<ProgressBar className="progress_bar" height='13px' bgColor={bar.bgColor} completed={bar.completed} />
								</article>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
export default Experience
