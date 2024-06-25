import './style.scss'

function Portfolio() {
    return (
        <div className='wp-portfolio__container fade-in-top section--padding'>
            <h1 className='section--title fade-in-top'>PORTFOLIO.</h1>
                {((data): any => {
                    if (data.length === 0) return (
                        <p className='sub--title fade-in-top'>Uploading soon!</p>
                    )
                    return (
                        <>
                            <div className='wp-portfolio__items fade-in-top'>
                                {
                                    data.map((item: PortfolioItem, i: number) => (
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

type PortfolioItem = {
    name: string
    link: string
} 
const PORTFOLIOS: PortfolioItem[] = [
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''},
    // {name: 'Ecommerce', link: ''}
]

export default Portfolio