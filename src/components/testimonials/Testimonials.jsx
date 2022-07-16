import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

{/* Not Now I Should Deleted*/}
const data = [{
  avatar: AVTR1,
  name: 'armin',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus modi voluptate debitis fugiat, reiciendis soluta culpa, adipisci neque amet earum mollitia laboriosam ex cumque fugit corrupti vero eaque laborum.'
},
{
  avatar: AVTR2,
  name: 'koliche',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus modi voluptate debitis fugiat, reiciendis soluta culpa, adipisci neque amet earum mollitia laboriosam ex cumque fugit corrupti vero eaque laborum.'
},
{
  avatar: AVTR3,
  name: 'Med',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus modi voluptate debitis fugiat, reiciendis soluta culpa, adipisci neque amet earum mollitia laboriosam ex cumque fugit corrupti vero eaque laborum.'
},
{
  avatar: AVTR4,
  name: 'anny',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias minus modi voluptate debitis fugiat, reiciendis soluta culpa, adipisci neque amet earum mollitia laboriosam ex cumque fugit corrupti vero eaque laborum.'
}]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {data.map(({avatar, name, review}, index)=> {
          return (
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })}
      </Swiper>
      </section>
  )
}

export default Testimonials