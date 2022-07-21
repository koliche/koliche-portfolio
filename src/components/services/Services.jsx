import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create Android application (Java/Android Studio)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create cross platform application (Flutter)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use Firebase services </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use SQL database </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Amazing and Expressive UIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ad network integration </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Development Hard Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Version Control Software Tool Git/Github</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Design pattern MVC and Bloc(Flutter)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> UML modeling and Merise</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Design with figma and Canva</p>
            </li>
  
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop a responsive and dynamic website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a responsive frontend (Angular)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create a Dynamic backend (Spring/Laravel)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design & Re-design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Experience & Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services