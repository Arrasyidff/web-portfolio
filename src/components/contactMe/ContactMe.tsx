import './style.scss'

function ContactMe() {
  return (
    <div className='wp-contact-me__container fade-in-top section--padding'>
        <h1 className='section--title fade-in-top'>CONTACT.</h1>

        <h2 className='sub--title fade-in-top'>Feel free to reach out if you'd like to collaborate or chat about tech!</h2>
        <div className='contact-me__items fade-in-top'>
            <div className='contact-me__item'>
            {LINKS.map((link, i) => (
                <button key={i} onClick={() => window.open(link.link)}>
                <i className={link.iconClass}></i>
                </button>
            ))}
            </div>
        </div>

        <div className='wp-contact-me__actions fade-in-top'>
            <a href="/files/cv.pdf" download="Fullstack Developer Arrasyid Fadel Fatonsyah.pdf">
              <button>Hire Me.</button>
            </a>
        </div>
    </div>
  )
}

type Link = {
  iconClass: string
  link: string
}
const LINKS: Link[] = [
  {iconClass: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/arrasyid-fadel-fatonsyah/'},
  {iconClass: 'fab fa-github-square', link: 'https://github.com/Arrasyidff'},
  {iconClass: 'far fa-envelope', link: 'mailto:aff.anton20@gmail.com'},
  {iconClass: 'fab fa-whatsapp', link: 'https://wa.me/+6289635164141'}
]

export default ContactMe