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
        <nav className='wp__header-navbar fade-in-left'>
          <a href="#home">HOME</a>
          <a href="#abouot_me">ABOUT ME</a>
          <a href="#service">SERVICE</a>
        </nav>
      </div>

      <img className='wp__header--black-triangle fade-in-left' src={black_triangle} alt="black-triangle" />
      <img className='wp__header--grey-triangle fade-in-top' src={grey_triangle} alt="grey-triangle" />

      <div className='wp__header-personal-img scale-up-bottom'>
        <img className='rotate-center' src={circle} alt="circle-personal-img" />
        <img src={personal} alt="personal-img" />
      </div>
    </section>
  )
}

export default Header