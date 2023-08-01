import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiGit,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si'

const skills = [
  {
    name: 'JavaScript',
    logo: SiJavascript,
  },
  {
    name: 'HTML',
    logo: SiHtml5,
  },
  {
    name: 'CSS',
    logo: SiCss3,
  },
  {
    name: 'Vue',
    logo: SiVuedotjs,
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
    name: 'Nextjs',
    logo: SiNextdotjs,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },

  {
    name: 'Firebase',
    logo: SiFirebase,
  },
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'Wordpress',
    logo: SiWordpress,
  },
]

const Skills = () => {
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          ¡Hola!
        </h1>

        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          En mi Blog podrás encontrar contenido de temas que he aprendido o he encontrado
          interesantes, relatos y experiencias. Este sitio fue creado con{' '}
          <strong>Nextjs y Tailwind CSS.</strong> ¡Contáctame y conoce mi stack!:
        </p>

        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
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
