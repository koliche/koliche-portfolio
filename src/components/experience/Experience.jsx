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
                <BsFillPatchCheckFill />
                <h4>Flutter</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Dart</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>XML</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Android Development</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Web Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Spring</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Vuejs</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
            <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small> 
            </article>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Experience