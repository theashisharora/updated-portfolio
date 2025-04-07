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
									<p>
										<Badges list={fullStack} block="stack" fullContainer="fullContainer" />
									</p>
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
									<p>
										<Badges list={boardOfDirectorsSkills} block="stack" fullContainer="fullContainer" />
									</p>
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
									<p>
										<Badges list={studentAmbassadorSkills} block="stack" fullContainer="fullContainer" />
									</p>
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
									<p>
										<Badges list={tommyHilfiger} block="stack" fullContainer="fullContainer" />
									</p>

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
	{ key: 'fa-cash-register', name: 'Sales & Customer Service', type: 'fa' },
	{ key: 'fa-users', name: 'Team Leadership', type: 'fa' },
	{ key: 'fa-boxes', name: 'Inventory Management', type: 'fa' },
	{ key: 'fa-credit-card', name: 'Point of Sale (POS) Systems', type: 'fa' },
	{ key: 'fa-tshirt', name: 'Visual Merchandising', type: 'fa' },
	{ key: 'fa-comments', name: 'Effective Communication', type: 'fa' },
	{ key: 'fa-lightbulb', name: 'Problem Solving', type: 'fa' },
	{ key: 'fa-clock', name: 'Time Management', type: 'fa' },
	{ key: 'fa-store', name: 'Brand Presentation', type: 'fa' },
	{ key: 'fa-smile', name: 'Customer Engagement', type: 'fa' }
];

const studentAmbassadorSkills = [
	{ key: 'fa-users', name: 'Public Speaking', type: 'fa' },
	{ key: 'fa-handshake', name: 'Student Engagement', type: 'fa' },
	{ key: 'fa-chalkboard-teacher', name: 'Event Facilitation', type: 'fa' },
	{ key: 'fa-calendar-alt', name: 'Campus Tours & Events', type: 'fa' },
	{ key: 'fa-comments', name: 'Communication & Outreach', type: 'fa' }
];

const boardOfDirectorsSkills = [
	{ key: 'leadership', name: 'Leadership', type: 'custom' },
	{ key: 'strategic-planning', name: 'Strategic Planning', type: 'custom' },
	{ key: 'governance', name: 'Governance', type: 'custom' },
	{ key: 'policy-development', name: 'Policy Development', type: 'custom' },
	{ key: 'stakeholder-engagement', name: 'Stakeholder Engagement', type: 'custom' },
	{ key: 'decision-making', name: 'Decision-Making', type: 'custom' },
	{ key: 'collaboration', name: 'Collaboration', type: 'custom' },
	{ key: 'conflict-resolution', name: 'Conflict Resolution', type: 'custom' },
	{ key: 'public-speaking', name: 'Public Speaking', type: 'custom' },
	{ key: 'student-advocacy', name: 'Student Advocacy', type: 'custom' },
	{ key: 'communication', name: 'Communication', type: 'custom' },
	{ key: 'equity-inclusion', name: 'Equity & Inclusion', type: 'custom' },
	{ key: 'teamwork', name: 'Teamwork', type: 'custom' },
	{ key: 'org-development', name: 'Organizational Development', type: 'custom' },
	{ key: 'project-oversight', name: 'Project Oversight', type: 'custom' }
  ];
  