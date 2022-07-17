import React from 'react'
import "./about.css"
import ME from '../../assets/mee.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about_me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>One Year Working</small>
              </article>

              <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>50+ Worldwide</small>
              </article>

              <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>10+ Completed</small>
              </article>
            </div>
            <p>
              I am currently a student in my first year of Master’s degree in Computer Science Engineering and I am
            looking for a practical internship in one of those domain mobile development or web development, integrated in my training.I am very interested in completing my internship within
            a company and gaining new skills.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About