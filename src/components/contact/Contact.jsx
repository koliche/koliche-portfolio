import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>koliche.mohamed0{/*'\n'*/}@gmail.com</h5>
            <a href="mailto:koliche.mohamed0@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>linkedin</h4>
            <h5>Mohamed Ait Koliche</h5>
            <a href="https://linkedin.com/in/mohamed-ait-koliche" target="_blank" rel="noreferrer">My Linkedin Profiel</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact