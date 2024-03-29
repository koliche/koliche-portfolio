import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Moroccan Food Recipes Application',
    github : 'https://github.com/koliche/Moroccan-Food-Recipes',
    demo : ''
  },
  {
    id : 2,
    image : IMG2,
    title : 'E-learning Android Application',
    github : 'https://github.com/koliche/My-E-Learning',
    demo : ''
  },
  {
    id : 3,
    image : IMG3,
    title : 'College Management System',
    github : 'https://github.com/Ray0Emma/Spring_FPBM',
    demo : ''
  },
  {
    // change this !
    id : 4,
    image : IMG4,
    title : 'Site Web For Ecommerce ',
    github : 'https://github.com/koliche/SiteEcommerce2',
    demo : ''
  },
  {
    // change this !
    id : 5,
    image : IMG5,
    title : 'Multi Authentification With Laravel',
    github : 'https://github.com/koliche/Multi-Authentification-Laravel',
    demo : ''
  },
  {
    // change this !
    id : 6,
    image : IMG6,
    title : 'Site Web For Post\'s Management',
    github : 'https://github.com/koliche/Posts',
    demo : ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Worck</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target= '_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target= '_blank'>Live Demo</a>
            {/* change demo button to this bellow! */}
            {/* {demo !== '' ? (
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            ) : (
              <span className='btn btn-primary disabled'>Live Demo</span>
            )} */}
            </div>
        </article>
            )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio