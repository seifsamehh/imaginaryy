import React from 'react'
import './style/Whybe.css'
import Ch1 from '../../images/women.webp'
import Ch2 from '../../images/head-2.webp'
import {motion} from 'framer-motion'

function WhyBe() {
  return (
    <section className="why">
      <motion.img src={Ch1} alt="first character"
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
          drag
          dragConstraints={{ top: 20, bottom: 500, left: 0, right: 1000 }} />
      <div className="content ml-10">
        <h1 data-aos="flip-left" data-aos-duration="1000">Why Be<br/><span>Imaginary?</span></h1>
        <p data-aos="fade-left" data-aos-duration="1000">When we were young, we dreamt of being superheroes. Anything and everything seemed possible. However, as time went by, the reality of life robbed us of our childhood ambitions.</p>
        <p data-aos="fade-left" data-aos-duration="1000"data-aos-delay="700">The Imaginary Ones wish to re-ignite that spark once again. Embrace creativity and work on the dreams you once had. Muster your courage and rewrite your story.</p>
        <p data-aos="fade-left" data-aos-duration="1000"data-aos-delay="900">Enter the Imaginary World — where no ideas are too crazy nor dreams too foolish.</p>
        <p data-aos="fade-left" data-aos-duration="1000"data-aos-delay="1000">Let's imagine. Together.</p>
      </div>
      <motion.img src={Ch2} alt="second character" 
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.8}}
        drag
        dragConstraints={{ top: -500, bottom: 20, left: 0, right: 1000 }} />
    </section>
  )
}

export default WhyBe