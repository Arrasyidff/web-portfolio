import React from 'react'

import './style.scss'
import personal from '@assets/person.png'
import circle from '@assets/header/circle.png'
import black_triangle from '@assets/header/black_triangle.png'
import grey_triangle from '@assets/header/grey_triangle.png'

function Header() {

  return (
    <section className='wp__header-container'>
      <div className='wp__header-left'>
        <div className='wp__header-content fade-in-top'>
          <h1>HI I'M ARFAFA</h1>
          <h2>I'm Web Developer</h2>
          <p>I have a passion for creating innovative and efficient digital solutions. Let's work together to make your great ideas a reality!</p>
        </div>
      </div>
      <div className='wp__header-right'>
        <NavBar />
      </div>

      <img className='wp__header--black-triangle fade-in-left' src={black_triangle} alt="black-triangle" />
      <img className='wp__header--grey-triangle fade-in-top' src={grey_triangle} alt="grey-triangle" />

      <div className='wp__header-personal-img scale-up-bottom'>
        <img className='rotate-center' src={circle} alt="circle-personal-img" />
        <img src={personal} alt="personal-img" />
      </div>

      <div className='wp__header-bars fade-in-left'>
        <i className="fas fa-bars"></i>
      </div>
      <NavBar />
    </section>
  )
}

const NavBar: React.FC = () =>
  {
    const handleScrollTo = (section: string) => {
      if (section === 'home') {
        const header = document.querySelector('.wp__header-container')
        header?.scrollIntoView({behavior: 'smooth'})
      } else if (section === 'about_me') {
        const aboutme = document.querySelector('.wp__about-me-container')
        aboutme?.scrollIntoView({behavior: 'smooth'})
      } else if (section === 'service') {
        const service = document.querySelector('.wp-service__container')
        service?.scrollIntoView({behavior: 'smooth'})
      } else if (section === 'portfolio') {
        const portfolio = document.querySelector('.wp-portfolio__container')
        portfolio?.scrollIntoView({behavior: 'smooth'})
      } else if (section === 'contact') {
        const contact = document.querySelector('.wp-contact-me__container')
        contact?.scrollIntoView({behavior: 'smooth'})
      }
    }

    return (
      <nav className='wp__header-navbar fade-in-left'>
        <button onClick={() => handleScrollTo('home')}>HOME</button>
        <button onClick={() => handleScrollTo('about_me')}>ABOUT ME</button>
        <button onClick={() => handleScrollTo('service')}>SERVICE</button>
        <button onClick={() => handleScrollTo('portfolio')}>PORTFOLIO</button>
        <button onClick={() => handleScrollTo('contact')}>CONTACT</button>
      </nav>
    )
  }

export default Header