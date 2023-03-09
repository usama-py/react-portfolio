import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTR1,
    name: 'P1',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam consequuntur saepe quaerat velit ab illum recusandae, assumenda unde neque ipsum nihil consectetur, dolorem omnis quod aperiam labore sapiente veniam'
  },
  {
    avatar: AVTR2,
    name: 'P2',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam consequuntur saepe quaerat velit ab illum recusandae, assumenda unde neque ipsum nihil consectetur, dolorem omnis quod aperiam labore sapiente veniam.'
  },
  {
    avatar: AVTR3,
    name: 'P3',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam consequuntur saepe quaerat velit ab illum recusandae, assumenda unde neque ipsum nihil consectetur, dolorem omnis quod aperiam labore sapiente veniam.'
  },
  {
    avatar: AVTR4,
    name: 'P4',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam consequuntur saepe quaerat velit ab illum recusandae, assumenda unde neque ipsum nihil consectetur, dolorem omnis quod aperiam labore sapiente veniam.'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className='client__avatar'>
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials