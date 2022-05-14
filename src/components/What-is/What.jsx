import React from 'react'
import './style/what.css'
import chrOne from '../../images/beanie.webp'
import chrTwo from '../../images/head.webp'
import chrThree from '../../images/head-2.webp'
import {motion} from 'framer-motion'

function What() {
  return (
    <section className='what'>
      <div className="upper-images flex justify-around">
        <motion.img src={chrOne} alt="character one"
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
          drag
          dragConstraints={{ top: 20, bottom: 20, left: 0, right: 1000 }} />
        <motion.img src={chrThree} alt="character three" className='three'
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.8}}
          drag="y"
          dragConstraints={{ bottom: 600, top: -200 }} />
      </div>
      <div className="content ml-10" data-aos="zoom-out-right" data-aos-duration="1000">
        <h1>WHAT IS<br/><span>IMAGINARY ONES?</span></h1>
        <p>Imaginary Ones is a delightful 3D animated art with an initial drop of 8888 unique NFTs on the<br/> Ethereum network. The project believes in using art to spread love, positivity, and creativity.</p>
      </div>
      <motion.img src={chrTwo} alt="character two"
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.8}}
        drag
        dragConstraints={{ top: 20, bottom: 20, left: 0, right: 1000 }} />
    </section>
  )
}

export default What