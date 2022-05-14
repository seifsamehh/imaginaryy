import React from 'react'
import './style/values.css'
import spark from '../../videos/spark.webm'
import vibes from '../../videos/vibes.webm'
import dream from '../../videos/dream.webm'
import {motion} from 'framer-motion'

function Values() {
  return (
    <section className='values'>
      <h1>IMAGINARY VALUES?</h1>
      <div className="boxes flex">
        <div className="box-1">
          <motion.video autoPlay loop muted 
          drag
          dragConstraints={{ left: 10, top: -10, bottom: 10,  right: 20 }}>
            <source src={spark} type="video/webm" />
          </motion.video>
          <h2>Find Your Spark</h2>
          <p>Do what brings you joy. A happy person is the most creative. A genuine smile is the most contagious.</p>
        </div>
        <div className="box-2">
          <motion.video autoPlay loop muted 
          drag
          dragConstraints={{ left: 10, top: -10, bottom: 10,  right: 20 }}>
            <source src={vibes} type="video/webm" />
          </motion.video>
          <h2>Good Vibes Only</h2>
          <p>Community building is our priority. Send love, share ideas and make the world a better place.</p>
        </div>
        <div className="box-3">
          <motion.video autoPlay loop muted
          drag
          dragConstraints={{ left: 10, top: -10, bottom: 10,  right: 20 }}>
            <source src={dream} type="video/webm" />
          </motion.video>
          <h2>Dream Big</h2>
          <p>Make your wildest imaginations come true.Aim for the moon and enjoy the stars.</p>
        </div>
      </div>
    </section>
  )
}

export default Values