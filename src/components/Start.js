import React from 'react'
import '../styles/start.css'
import startImg from '../assets/img/trainer.png'
const Start = () => {
  return (
    <section id="classes">
      <div className='container'>
        <div className='start__wrapper'>
            <div className='start__img'>
                <img src={startImg}
                 data-aos='fade-left'
                    data-aos-duration="1500"
                 />
            </div>

            <div className='start__content'
             data-aos='fade-right'
                    data-aos-duration="1500"
            >
                <h2 className='section__title'>
                    Ready to make a <span className='highlights'>change?</span>
                </h2>
                <p>
                  Ipsum ullamco duis ea mollit occaecat elit anim veniam et eiusmod quis incididunt.
                  Ipsum ullamco duis ea mollit occaecat elit anim veniam et eiusmod quis incididunt.
                  Ipsum ullamco duis ea mollit occaecat elit anim veniam et eiusmod quis incididunt.
                </p>
                <button className='register__btn' >
                    Get Started
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Start