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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Bridging Technology & Innovation"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong foundation in full stack development, cybersecurity, and machine learning, I bring a unique perspective to every project. My passion for problem-solving and continuous learning allows me to stay ahead of industry trends, ensuring innovative and scalable solutions."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with" 
							copy="With a strong foundation in full stack development, cybersecurity, and machine learning, I have hands-on experience with a variety of industry-leading tools that enhance productivity and innovation. This is just some of the software I use regularly:"
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving complex problems through code, whether it's crafting seamless front-end experiences, designing robust back-end systems, or integrating efficient APIs. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
    { key: 'vscode',         name: 'VSCode',          type: 'devicon' },
    { key: 'git',            name: 'Git',             type: 'devicon' },
    { key: 'react',          name: 'React',           type: 'devicon' },
    { key: 'nodejs',         name: 'Node.js',         type: 'devicon' },
    { key: 'flask',          name: 'Flask',           type: 'devicon' },
    { key: 'mongodb',        name: 'MongoDB',         type: 'devicon' },
    { key: 'mysql',          name: 'MySQL',           type: 'devicon' },
    { key: 'aws',            name: 'AWS',             type: 'devicon' },
    { key: 'figma',          name: 'Figma',           type: 'devicon' },
    { key: 'linux',          name: 'Linux',           type: 'devicon' },
    { key: 'wifi',           name: 'Wireshark',       type: 'fas' },
    { key: 'skull-crossbones', name: 'Kali Linux',    type: 'fas' },
    { key: 'database',       name: 'SQL',             type: 'fas' },
];

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]