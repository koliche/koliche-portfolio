import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mepkgfc', 'template_e4e17qr', form.current, '0bK4RRqvf_PA2bIdl')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };
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
            <a href="mailto:koliche.mohamed0@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>linkedin</h4>
            <h5>Mohamed Ait Koliche</h5>
            <a href="https://linkedin.com/in/mohamed-ait-koliche" target="_blank">My Linkedin Profiel</a>
          </article>
          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/> 
            <h4>WhatsApp</h4>
            <h5>+21 26 39 95 16 28</h5>
            <a href="https://web.whatsapp.com/send?phone=+212639951628" target="_blank">Send a message</a>

          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS  */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact