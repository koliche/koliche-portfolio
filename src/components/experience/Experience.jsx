import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
       
       <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Flutter</h4>
                <small className='text-light'>Intermediate</small>
                  </div> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Dart</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>XML</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Android Development</h4>
                <small className='text-light'>Intermediate</small>
                  </div> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Web Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
                </div> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
                
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Angular</h4>
                <small className='text-light'>Basics</small> 
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>HTML/CSS/JS</h4>
                <small className='text-light'>Intermediate</small> 
                </div>
            </article>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Experience