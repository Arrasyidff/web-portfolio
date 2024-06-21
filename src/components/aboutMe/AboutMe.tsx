import './style.scss'

function AboutMe() {
  return (
    <section className='wp__about-me-container section--padding'>
      <h1 className='section--title'>ABOUT ME</h1>
      <p className='wp__about-me--description'>
        Hi there! My name is Arrasyid Fadel Fatonsyah, but you can call me ARFAFA.
        I'm a Fullstack Web Developer with a strong focus on backend development.
        With three years of professional experience, I currently work as a remote Backend Developer based
        in Kudus, Central Java. I specialize in creating scalable and efficient server-side applications.
      </p>

      <div className='wp__about-me-skillset'>
        <h2 className='sub--title'>Skill - Set</h2>
        <div className='wp__about-me-skillset-item'>
          {SKILLS.map((skill, i) => {
            if (skill.isIcon) return (
              <button key={i}>
                <i className={skill.iconClass}></i>
              </button>
            )
            return (
              <button key={i}>
                {skill.iconClass}
              </button>
            )
          })}
        </div>
      </div>

      <div className='wp__about-me-contact'>
        <h2 className='sub--title'>Feel free to reach out if you'd like to collaborate or chat about tech!</h2>
        <div className='wp__about-me-contacts-item'>
          {LINKS.map((link, i) => (
            <button key={i} onClick={() => window.open(link.link)}>
              <i className={link.iconClass}></i>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

type Skill = {
  iconClass: string
  isIcon: boolean
}
const SKILLS: Skill[] = [
  {iconClass: 'fab fa-js-square', isIcon: true},
  {iconClass: 'Typescript', isIcon: false},
  {iconClass: 'fab fa-node', isIcon: true},
  {iconClass: 'ex', isIcon: false},
  {iconClass: 'fab fa-php', isIcon: true},
  {iconClass: 'fab fa-laravel', isIcon: true},
  {iconClass: 'MySQL', isIcon: false},
  {iconClass: 'PostgreSQL', isIcon: false},
  {iconClass: 'MongoDB', isIcon: false},
  {iconClass: 'fab fa-vuejs', isIcon: true},
  {iconClass: 'fab fa-react', isIcon: true},
  {iconClass: 'Vuex', isIcon: false},
  {iconClass: 'Redux', isIcon: false},
  {iconClass: 'fab fa-css3', isIcon: true},
  {iconClass: 'Tailwind', isIcon: false},
  {iconClass: 'fab fa-sass', isIcon: true},
]

type Link = {
  iconClass: string
  link: string
}
const LINKS: Link[] = [
  {iconClass: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/arrasyid-fadel-fatonsyah/'},
  {iconClass: 'fab fa-github-square', link: 'https://github.com/Arrasyidff'},
  {iconClass: 'far fa-envelope', link: 'mailto:aff.anton20@gmail.com'},
  {iconClass: 'fab fa-whatsapp', link: 'https://wa.me/089635164141'}
]

export default AboutMe