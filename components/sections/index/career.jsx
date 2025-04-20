// Career component
import Image from 'next/image'
import { useEffect, useState } from 'react';

import Badges from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true); // Ensures dynamic content only renders on the client
	}, []);

	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I currently manage, design, and develop software solutions, focusing on full-stack development and machine learning projects."
				/>
				<section className={career.area}>
					{isClient && (
						<>
							<article className={career.company}>
								<div className={career.companyContent}>
									<span className={career.companyHeader}>
										<h3>Sheridan College (Powered by Samskrita Bharati)</h3>
										<h4>Full-Stack Developer (Full-time)</h4>
										<h4>Jan 2025 - Apr 2025 · 4 mos</h4>
										<h5>Oakville, Ontario, Canada</h5>
									</span>
									<p>
									As a Full Stack Developer, I design and develop scalable web applications using modern technologies such as React, Node.js, and MongoDB. I work across both frontend and backend environments, build responsive UI components, implement RESTful APIs, and manage databases. My role involves debugging, code optimization, version control, and deployment, ensuring seamless user experiences and efficient application performance.
									</p>
									<div>
										<Badges list={fullStack} block="stack" fullContainer="fullContainer" />
									</div>
								</div>
							</article>

							<article className={career.company}>
								<div className={career.companyContent}>
									<span className={career.companyHeader}>
										<h3>Sheridan College</h3>
										<h4>Board of Director (Part-time Contract)</h4>
										<h4>May 2025 - Present</h4>
										<h5>Davis Campus, Ontario, Canada</h5>
									</span>
									<p>
										As a Board of Director at Sheridan College, I contribute to key decision-making processes, represent student interests in strategic planning, and collaborate with college leadership to enhance institutional effectiveness. I engage in policy discussions, governance responsibilities, and initiatives that promote a supportive and inclusive academic environment.
									</p>
									<div>
										<Badges list={boardOfDirectorsSkills} block="stack" fullContainer="fullContainer" />
									</div>
								</div>
							</article>


							<article className={career.company}>
								<div className={career.companyContent}>
									<span className={career.companyHeader}>
										<h3>Sheridan College</h3>
										<h4>Student Ambassador (Part-time Contract)</h4>
										<h4>Aug 2024 - Present</h4>
										<h5>Davis Campus, Brampton, Ontario, Canada</h5>
									</span>
									<p>
										As a Student Ambassador at Sheridan College, I assist with recruitment events, lead campus tours, and support new students in their transition to college life. I represent the college professionally, provide administrative assistance, and foster engagement among students.
									</p>
									<div>
										<Badges list={studentAmbassadorSkills} block="stack" fullContainer="fullContainer" />
									</div>
								</div>
							</article>

							<article className={career.company}>
								<div className={career.companyContent}>
									<span className={career.companyHeader}>
										<h3>Tommy Hilfiger</h3>
										<h4>Lead Sales Associate (Part-time)</h4>
										<h4>Oct 2023 - Present · 1 yr 6 mos</h4>
										<h5>Halton Hills, Ontario, Canada</h5>
									</span>
									<p>
										At Tommy Hilfiger, I lead sales initiatives, assist in team training, and ensure an exceptional customer experience. I focus on driving sales performance, optimizing store operations, and maintaining brand standards to enhance customer engagement.
									</p>
									<div>
										<Badges list={tommyHilfiger} block="stack" fullContainer="fullContainer" />
									</div>

								</div>
							</article>
						</>

					)}
				</section>
			</Container>
		</Section>
	)
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]

const tommyHilfiger = [
	{ key: 'cash-register', name: 'Sales & Customer Service', type: 'fas' },
	{ key: 'users', name: 'Team Leadership', type: 'fas' },
	{ key: 'boxes', name: 'Inventory Management', type: 'fas' },
	{ key: 'credit-card', name: 'Point of Sale (POS) Systems', type: 'fas' },
	{ key: 'tshirt', name: 'Visual Merchandising', type: 'fas' },
	{ key: 'comments', name: 'Effective Communication', type: 'fas' },
	{ key: 'lightbulb', name: 'Problem Solving', type: 'fas' },
	{ key: 'clock', name: 'Time Management', type: 'fas' },
	{ key: 'store', name: 'Brand Presentation', type: 'fas' },
	{ key: 'smile', name: 'Customer Engagement', type: 'fas' },
];

const studentAmbassadorSkills = [
	{ key: 'users', name: 'Public Speaking', type: 'fas' },
	{ key: 'handshake', name: 'Student Engagement', type: 'fas' },
	{ key: 'chalkboard-teacher', name: 'Event Facilitation', type: 'fas' },
	{ key: 'calendar-alt', name: 'Campus Tours & Events', type: 'fas' },
	{ key: 'comments', name: 'Communication & Outreach', type: 'fas' },
];

const boardOfDirectorsSkills = [
	{ key: 'user-tie', name: 'Leadership', type: 'fas' },
	{ key: 'project-diagram', name: 'Strategic Planning', type: 'fas' },
	{ key: 'balance-scale', name: 'Governance', type: 'fas' },
	{ key: 'file-alt', name: 'Policy Development', type: 'fas' },
	{ key: 'users-cog', name: 'Stakeholder Engagement', type: 'fas' },
	{ key: 'gavel', name: 'Decision-Making', type: 'fas' },
	{ key: 'handshake', name: 'Collaboration', type: 'fas' },
	{ key: 'comments', name: 'Conflict Resolution', type: 'fas' },
	{ key: 'bullhorn', name: 'Public Speaking', type: 'fas' },
	{ key: 'user-shield', name: 'Student Advocacy', type: 'fas' },
	{ key: 'comment-dots', name: 'Communication', type: 'fas' },
	{ key: 'universal-access', name: 'Equity & Inclusion', type: 'fas' },
	{ key: 'people-carry', name: 'Teamwork', type: 'fas' },
	{ key: 'building', name: 'Organizational Development', type: 'fas' },
	{ key: 'tasks', name: 'Project Oversight', type: 'fas' },
];  