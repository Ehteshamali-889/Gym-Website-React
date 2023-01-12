import React from 'react'
import heroImg from '../assets/img/gym-02.png'
import dumbleIcon from '../assets/img/dumble.png'
import '../styles/hero.css'
const Hero = () => {
  return (
    <section id="home">
        <div className='container'>
            <div className='hero__wrapper' >
                <div className='hero__content'>
                    <h2 className='section__title' 
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    >
                        Excercise is the key to a
                        <span className='highlights'> Healthy</span> lifestyle
                    </h2>
                    <p
                    data-aos='fade-up'
                    data-aos-delay='100'
                    data-aos-duration="1800"
                    >
                    Nostrud nisi nulla sunt consectetur Lorem anim aliquip aute ipsum.
                    </p>
                    <div className='hero__btns'
                    data-aos='fade-up'
                    data-aos-duration="2000"
                    data-aos-delay='200'
                    >
                        <button className='register__btn' >
                            Get Started
                        </button>
                        <button className='watch__btn' >
                            <span>
                                <i className='ri-play-fill'></i>
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>

                <div className='hero__img' >
                    <div className='hero__img-wrapper'>
                        <div className='box-01'>
                            <div className='box-02'>
                                <div className='box-03'>
                                    <div className='box__img'>
                                        <img src={heroImg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='heart__rate'
                        data-aos='fade-right'
                        data-aos-duration="1500"
                        >
                            <h5>Heart Rate</h5>
                            <span>
                                <i
                                className='ri-heart-pulse-fill'
                                ></i>
                            </span>
                            <h5>2567 BPM</h5>
                        </div>

                        <div className='gym__location'
                        data-aos='fade-left'
                    data-aos-duration="1500"
                        >
                            <span>
                                <i 
                                class='ri-map-pin-2-fill'
                                >

                                </i>
                            </span>
                            <h5>
                                Find a new <br/> gym near you
                            </h5>
                        </div>

                        <div className='dumble__icon'
                        data-aos='fade-down'
                    data-aos-duration="1500"
                        >
                            <img src={dumbleIcon} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero