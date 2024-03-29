import React from 'react'
import "./about.css"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>No official Work</small>
              </article>

              <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>1+ Worldwide</small>
              </article>

              <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>3+ Completed</small>
              </article>
            </div>
            <p>
            I am a Software Engineering Master's graduate seeking a Full Stack Java Internship or job. 
            Well-versed in Java development, including Java EE, Spring Boot and Angular, with a strong academic background. 
            Enthusiastic about making meaningful contributions and advancing skills within a dynamic team.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About