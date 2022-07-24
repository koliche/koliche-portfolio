import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MyLogo</a>
      {/*<ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twiter.com"><BsTwitter/></a>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://linkedin.com"><FaLinkedinIn/></a>
        <a href="https://github.com"><FiGithub/></a>
  </div>*/}

      <div className="footer__copyright">
        <small>
          &copy; Created By Mohamed Ait Koliche
        </small>
      </div>
    </footer>
  )
}

export default Footer