import './style.scss'

function Service() {
  return (
    <div className='wp-service__container fade-in-top section--padding'>
        <h1 className='section--title fade-in-top'>SERVICE.</h1>
        <div className='wp-service__items fade-in-top'>
            <div className='wp-service__item'>
                <h2 className='sub--title'>Fullstack Development.</h2>
                <p>
                    Building complete web applications from frontend to backend.
                </p>
            </div>
            <div className='wp-service__item'>
                <h2 className='sub--title'>Backend Development.</h2>
                <p>
                    Creating robust server-side logic and APIs.
                </p>
            </div>
            <div className='wp-service__item'>
                <h2 className='sub--title'>Database Management.</h2>
                <p>
                    Designing and managing efficient database structures.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service