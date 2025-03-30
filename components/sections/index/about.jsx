// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="As a passionate full stack developer and cybersecurity enthusiast, I specialize in building scalable web applications, crafting secure systems, and leveraging machine learning to solve real-world problems."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="my photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise in full stack development and cybersecurity, I bring strong leadership, problem-solving, and collaboration skills—refined through my experience as a student leader, team player, and mentor. My ability to manage time effectively and adapt to new challenges allows me to thrive in fast-paced environments. Outside of tech, I stay active and continuously seek opportunities to grow both personally and professionally. I am confident in my ability to contribute passion, innovation, and value to any project."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of development is designing the architecture of a project. From system design to cybersecurity best practices—I enjoy working across the many layers of full stack development to create secure, scalable, and user-friendly solutions."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods = [
    { key: 'server',          name: 'System Architecture',   type: 'fad' },
    { key: 'shield-alt',      name: 'Cybersecurity',         type: 'fad' },
    { key: 'code',            name: 'Full Stack Development', type: 'fad' },
    { key: 'brain',           name: 'Machine Learning',      type: 'far' },
    { key: 'network-wired',   name: 'Networking',            type: 'fad' },
    { key: 'database',        name: 'Data Management',       type: 'fad' },
];
