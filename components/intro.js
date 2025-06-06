import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { TypeAnimation } from 'react-type-animation'

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiAngular,
  SiSpringboot,
  SiPython,
} from 'react-icons/si'

const skills = [
  {
    name: 'Spring Boot',
    logo: SiSpringboot,
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
  },
  {
    name: 'Angular',
    logo: SiAngular,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  {
    name: 'Redux',
    logo: SiRedux,
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss,
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },
  {
    name: 'Langchain',
    logo: SiPython,
  },
]

const Skills = () => {
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <TypeAnimation
          className="my-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14"
          sequence={[
            '¡Hola! Me llamo Manuel', // Types 'One'
            3000, // Waits 1s
            'Transformo ideas a código', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            'Construyo experiencias digitales', // Types 'Three' without deleting 'Two'
            3000,
            /* () => {
              console.log('Secuencia completada!')
            }, */
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
        />

        <p className=" pb-4 text-lg leading-7 text-gray-700 dark:text-gray-400 md:pt-4 md:pb-2">
          {siteMetadata.description}
        </p>
        <p className="pb-4 text-lg leading-7 text-gray-700 dark:text-gray-400 md:pb-2">
          En mi blog comparto conocimientos sobre programación, desarrollo web, y reflexiones
          basadas en proyectos reales. ¡Puedes contactarme mediante las siguientes Redes Sociales!
        </p>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        </div>
      </div>

      <div className="my-10 grid grid-cols-3 gap-4">
        {skills.map((skill, index) => {
          return (
            <div
              title={skill.name}
              key={skill.name}
              className="dark:bg-darkPrimary group hover:dark:bg-darkSecondary flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <skill.logo className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Skills
