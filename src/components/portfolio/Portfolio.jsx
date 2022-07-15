import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Moroccan Food Recipes Application',
    github : 'https://github.com/koliche/Moroccan-Food-Recipes',
    demo : 'https://github.com/koliche/Moroccan-Food-Recipes'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Elearning Android Application',
    github : 'https://github.com/koliche/My-E-Learning',
    demo : 'https://github.com/koliche/My-E-Learning'
  },
  {
    id : 3,
    image : IMG3,
    title : 'College Management System',
    github : 'https://github.com/Ray0Emma/Spring_FPBM',
    demo : 'https://github.com/Ray0Emma/Spring_FPBM'
  },
  {
    id : 4,
    image : IMG4,
    title : 'Site Web For Ecommerce ',
    github : 'https://github.com/koliche/SiteEcommerce2',
    demo : 'https://github.com/koliche/SiteEcommerce2'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Multi Authentification With Laravel',
    github : 'https://github.com/koliche/Multi-Authentification-Laravel',
    demo : 'https://github.com/koliche/Multi-Authentification-Laravel'
  },
  {
    id : 6,
    image : IMG6,
    title : 'Site Web For Post\'s Management',
    github : 'https://github.com/koliche/Posts',
    demo : 'https://github.com/koliche/Posts'
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