import React from 'react'
import '../styles/excercise.css'
import lunges from '../assets/img/lunges.png'
import yoga from '../assets/img/yoga-pose.png'
import extended from '../assets/img/extended.png'
const Excercise = () => {
  return (
    <section id="schedule">
        <div className='container exercise__container'>
            <div className='exercise__top'>
                <h2 className='section__title'>
                    Benfits of <span className='highlights'>
                        Excercise
                    </span>
                </h2>
                <p>
                Nostrud nisi nulla sunt consectetur Lorem anim aliquip aute ipsum.<br/>
                Tempor anim adipisicing ullamco pariatur ad officia nulla pariatur.
                </p>
            </div>

            <div className='exercise__wrapper'>
                <div className='exercise__item'
                data-aos='zoom-in'
                    data-aos-duration="1500"
                >
                    <span className='exercise__icon'>
                        <img src={lunges} />
                    </span>
                    <div className='exercise__content'>
                        <h4>
                            Healthy Life
                        </h4>
                        <p>
                        Nostrud nisi nulla sunt consectetur Lorem anim aliquip aute ipsum.
                        </p>
                    </div>
                </div>

                <div className='exercise__item'
                 data-aos='zoom-in'
                    data-aos-duration="1500"
                >
                    <span className='exercise__icon'>
                        <img src={yoga} />
                    </span>
                    <div className='exercise__content'>
                        <h4>
                            Increased Flexibility
                        </h4>
                        <p>
                        Nostrud nisi nulla sunt consectetur Lorem anim aliquip aute ipsum.
                        </p>
                    </div>
                </div>

                <div className='exercise__item'
                 data-aos='zoom-in'
                    data-aos-duration="1500"
                >
                    <span className='exercise__icon'>
                        <img src={extended} />
                    </span>
                    <div className='exercise__content'>
                        <h4>
                            Reducing Blood Pressure
                        </h4>
                        <p>
                        Nostrud nisi nulla sunt consectetur Lorem anim aliquip aute ipsum.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Excercise