import './style.scss'

function Portfolio() {
    return (
        <div className='wp-portfolio__container section--padding'>
            <h1 className='section--title'>PORTFOLIO.</h1>
                {((data): any => {
                    if (data.length === 0) return (
                        <p className='sub--title'>Uploading soon!</p>
                    )
                    return (
                        <>
                            <div className='wp-portfolio__items'>
                                {
                                    data.map((item: Portfolio, i: number) => (
                                        <div key={i} className='wp-portfolio__item'>
                                            <h2 className='sub--title'>{item.name}</h2>
                                            <div className='wp-portfolio__item-img'>
                            
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )
                })(PORTFOLIOS)}
        </div>
    )
}

type Portfolio = {
    name: string
    link: string
} 
const PORTFOLIOS: Portfolio[] = [
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''}
]

export default Portfolio